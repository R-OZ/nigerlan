import { spawnSync } from 'node:child_process';

// Diagnostic command: deliberately exits nonzero while known defects remain.
// Execute both suites even when one fails, so no failure inventory is hidden.
let failed = false;
for (const workspace of ['@nigerlan/api', '@nigerlan/web']) {
  const result = spawnSync(
    process.platform === 'win32' ? 'npm.cmd' : 'npm',
    ['test', '--workspace', workspace],
    {
      stdio: 'inherit',
      env: { ...process.env, NIGERLAN_VERIFY_DEFECTS: '1' },
    },
  );
  if (result.error) throw result.error;
  failed ||= result.status !== 0;
}
process.exitCode = failed ? 1 : 0;
