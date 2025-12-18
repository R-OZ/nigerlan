import { spawn } from 'node:child_process';

const port = process.env.PORT || '4000';
const origin = `http://localhost:${port}`;
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const children = [
  spawn(npm, ['run', 'dev:api'], {
    stdio: 'inherit',
    env: { ...process.env, PORT: port, ASSET_BASE_URL: process.env.ASSET_BASE_URL || origin },
  }),
  spawn(npm, ['run', 'dev:web'], {
    stdio: 'inherit',
    env: { ...process.env, REACT_APP_API_URL: process.env.REACT_APP_API_URL || origin },
  }),
];
let stopping = false;
function stop(code) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  for (const child of children) child.kill('SIGTERM');
}
for (const child of children) {
  child.on('error', (error) => {
    console.error(`Cannot start development process: ${error.message}`);
    stop(1);
  });
  child.on('exit', (code, signal) => {
    if (!stopping) stop(code ?? (signal ? 1 : 0));
  });
}
process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));
