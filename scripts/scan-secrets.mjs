import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, lstatSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const binary = process.env.GITLEAKS_BIN || resolve('.runtime/gitleaks');
let version;
try {
  version = execFileSync(binary, ['version'], { encoding: 'utf8' }).trim();
} catch {
  throw new Error('Gitleaks is unavailable. Run npm run security:install, or set GITLEAKS_BIN.');
}
if (version !== '8.30.1') throw new Error(`Expected Gitleaks 8.30.1, received ${version}`);
const snapshot = mkdtempSync(join(tmpdir(), 'nigerlan-scan-'));
let failed = false;
function scan(args) {
  const result = spawnSync(binary, [...args, '--redact=100', '--no-banner'], { stdio: 'inherit' });
  if (result.error) throw result.error;
  failed ||= result.status !== 0;
}
try {
  // Include pending changes while excluding ignored caches/dependencies/secrets.
  // History is scanned separately with all refs; no repository-specific allowlist.
  const files = execFileSync(
    'git',
    ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
    { encoding: 'utf8' },
  );
  for (const file of new Set(files.split('\0').filter(Boolean))) {
    let stat;
    try {
      stat = lstatSync(file);
    } catch (error) {
      if (error.code === 'ENOENT') continue; // A pending deletion.
      throw error;
    }
    if (!stat.isFile())
      throw new Error(`Review non-regular repository entry before scanning: ${file}`);
    const target = join(snapshot, file);
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(file, target);
  }
  scan(['dir', snapshot]);
  scan(['git', '.', '--log-opts=--all --no-renames']);
} finally {
  // Delete only the private temporary directory created by this invocation.
  rmSync(snapshot, { recursive: true, force: true });
}
process.exitCode = failed ? 1 : 0;
