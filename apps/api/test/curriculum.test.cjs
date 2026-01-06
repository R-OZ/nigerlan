const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { existsSync } = require('node:fs');
const path = require('node:path');
const app = require('../app');

let server;
let base;
before(async () => {
  server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  if (!server?.listening) return;
  server.closeAllConnections();
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
});

const modules = {
  alphabet: [2, 0, 0],
  vowel: [7, 4, 3],
  consonant: [9, 8, 6],
  number: [11, 5, 5],
  body: [10, 5, 3],
};

function mediaReferences(value) {
  if (typeof value === 'string' && /^https?:\/\//.test(value)) return [new URL(value).pathname];
  if (value && typeof value === 'object') return Object.values(value).flatMap(mediaReferences);
  return [];
}

for (const [id, counts] of Object.entries(modules)) {
  test(`${id}: GET returns the existing curriculum contract`, async () => {
    const response = await fetch(`${base}/lecture/${id}`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /application\/json/);
    assert.equal(response.headers.get('access-control-allow-origin'), '*');
    const data = await response.json();
    assert.equal(typeof data.lecTxt, 'string');
    assert.match(data.progyColor, /^#[0-9a-f]{6}$/i);
    assert.equal(data.isTest, id !== 'alphabet');
    assert.deepEqual([data.lecBody.length, data.test1.length, data.test2.length], counts);
    for (const question of [...data.test1, ...data.test2]) {
      assert.ok(question.question.length >= 3);
      assert.equal(new Set(question.question).size, question.question.length);
      assert.ok(question.question.every((option) => typeof option === 'string' && option.length));
    }
    if (data.isTest) assert.ok(Array.isArray(data.answers) && data.answers.length > 0);
  });

  if (id !== 'body') {
    test(`${id}: every referenced media file exists`, async () => {
      const data = await (await fetch(`${base}/lecture/${id}`)).json();
      for (const media of mediaReferences(data)) {
        assert.ok(
          existsSync(path.join(__dirname, '../public', media)),
          `Missing ${id} media: ${media}`,
        );
      }
    });
  }
}

test('all question option sets survive repeated randomization', async () => {
  for (const id of ['vowel', 'consonant', 'number', 'body']) {
    const baseline = await (await fetch(`${base}/lecture/${id}`)).json();
    for (let attempt = 0; attempt < 3; attempt++) {
      const next = await (await fetch(`${base}/lecture/${id}`)).json();
      for (const phase of ['test1', 'test2']) {
        next[phase].forEach((question, index) => {
          assert.deepEqual(
            [...question.question].sort(),
            [...baseline[phase][index].question].sort(),
          );
        });
      }
    }
  }
});

test('unsupported module returns 404 rather than a lesson', async () => {
  const response = await fetch(`${base}/lecture/unknown`);
  assert.equal(response.status, 404);
});

test('unsupported mutation cannot modify curriculum', async () => {
  assert.equal((await fetch(`${base}/lecture/vowel`, { method: 'POST' })).status, 404);
});

test('static pronunciation media is served with an audio content type', async () => {
  const response = await fetch(`${base}/audio/AlphabetsPro/u.mp3`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /audio\/mpeg/);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
});

test('missing static file returns 404', async () => {
  assert.equal((await fetch(`${base}/audio/not-a-recording.mp3`)).status, 404);
});

test('controller failure produces an unsuccessful JSON response', async () => {
  const vowel = require('../controllers/vowel');
  let status;
  let body;
  await vowel(
    {},
    {
      json() {
        throw new Error('simulated response failure');
      },
      status(code) {
        status = code;
        return {
          json(value) {
            body = value;
          },
        };
      },
    },
  );
  assert.equal(status, 500);
  assert.ok(body && Object.hasOwn(body, 'message'));
});

// Assert the desired behavior. Only assertion failures are tracked; unexpected
// infrastructure errors and unexpectedly fixed defects fail the normal suite.
function knownDefect(id, description, check) {
  test(`KNOWN ${id}: ${description}`, async (context) => {
    if (process.env.NIGERLAN_VERIFY_DEFECTS === '1') return check();
    let failure;
    try {
      await check();
    } catch (error) {
      failure = error;
    }
    assert.ok(
      failure instanceof assert.AssertionError,
      `${id} changed: remove/update the known-defect marker after review`,
    );
    context.diagnostic(`Expected assertion failure; unresolved ${id}: ${failure.message}`);
  });
}

const missingBodyMedia = [
  'longlongtongue.mp3',
  'longlongneck.mp3',
  'longlongshoulder.mp3',
  'butt.mp3',
];
for (const file of missingBodyMedia) {
  knownDefect(`NL-001/${file}`, 'referenced body recording should be available', async () => {
    const data = await (await fetch(`${base}/lecture/body`)).json();
    const media = `/audio/BodyPro/${file}`;
    if (!mediaReferences(data).includes(media))
      throw new Error(`Reference changed: review NL-001/${file}`);
    assert.equal((await fetch(base + media)).status, 200, `Referenced recording missing: ${media}`);
  });
}
test('body media outside the four recorded defects exists', async () => {
  const data = await (await fetch(`${base}/lecture/body`)).json();
  for (const media of mediaReferences(data)) {
    if (missingBodyMedia.some((file) => media === `/audio/BodyPro/${file}`)) continue;
    assert.ok(
      existsSync(path.join(__dirname, '../public', media)),
      `New missing body media: ${media}`,
    );
  }
});

knownDefect('NL-002', 'body audio answer should agree with its recording', async () => {
  const data = await (await fetch(`${base}/lecture/body`)).json();
  for (const question of data.test2) {
    const selected = question.question.find((option) => data.answers.includes(option));
    const recording = path.basename(new URL(question.sound).pathname, '.mp3');
    assert.equal(selected, recording, 'Recording and selected correct answer disagree');
  }
});
