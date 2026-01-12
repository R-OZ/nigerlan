import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
  .split('\0')
  .filter(Boolean);
const unsafe = files.filter((file) => {
  const name = file.split('/').at(-1);
  const environment = /^\.env(?:\.|$)/.test(name) && !name.endsWith('.example');
  return (
    environment ||
    /^(\.DS_Store|Thumbs\.db|Desktop\.ini)$/.test(name) ||
    /\.(pem|key|p12|pfx)$/.test(name)
  );
});
assert.deepEqual(
  unsafe,
  [],
  'Remove sensitive local configuration or OS artifacts from the current tree; never print their contents.',
);
assert.deepEqual(
  files.filter((file) => /(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml)$/.test(file)),
  ['package-lock.json'],
  'The root npm lockfile must be authoritative.',
);
assert.equal(
  process.versions.node,
  readFileSync('.nvmrc', 'utf8').trim(),
  'Run nvm use before verification.',
);
assert.match(
  process.env.npm_config_user_agent || '',
  /^npm\/11\.19\.0 /,
  'Use npm 11.19.0 bundled with the pinned Node release.',
);
for (const original of [
  'ee3e2ef00b820403c0c373cc3685289789c6db47',
  '9ccb6f96e5c003bcb4b34604ce0df6ce4fb9f1f1',
]) {
  execFileSync('git', ['merge-base', '--is-ancestor', original, 'HEAD']);
}
console.log('Runtime, lockfile, current-tree hygiene, and both original history tips verified.');
