import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const version = '8.30.1';
const archives = {
  'darwin-arm64': [
    'darwin_arm64',
    'b40ab0ae55c505963e365f271a8d3846efbc170aa17f2607f13df610a9aeb6a5',
  ],
  'linux-x64': ['linux_x64', '551f6fc83ea457d62a0d98237cbad105af8d557003051f41f3e7ca7b3f2470eb'],
};
const archive = archives[`${process.platform}-${process.arch}`];
if (!archive)
  throw new Error('Install Gitleaks 8.30.1 for your platform and set GITLEAKS_BIN to its path.');
const [platform, checksum] = archive;
const name = `gitleaks_${version}_${platform}.tar.gz`;
const response = await fetch(
  `https://github.com/gitleaks/gitleaks/releases/download/v${version}/${name}`,
  {
    signal: AbortSignal.timeout(60_000),
  },
);
if (!response.ok) throw new Error(`Gitleaks download failed: HTTP ${response.status}`);
const bytes = Buffer.from(await response.arrayBuffer());
if (createHash('sha256').update(bytes).digest('hex') !== checksum)
  throw new Error('Gitleaks checksum mismatch. Nothing extracted.');
mkdirSync('.runtime', { recursive: true });
writeFileSync(`.runtime/${name}`, bytes);
execFileSync('tar', ['-xzf', `.runtime/${name}`, '-C', '.runtime', 'gitleaks']);
console.log(`Installed checksum-verified Gitleaks ${version} in ignored .runtime/`);
