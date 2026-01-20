# NigerLan

An anonymous Yoruba-learning application with a React frontend and Express
curriculum API. The modernization is in progress on
`codex/nigerlan-modernization`; the original `main` branch remains unchanged.

## Repository layout

- `apps/web/`: original React application, media, screenshots, and frontend notes.
- `apps/api/`: original Express curriculum routes and pronunciation media.
- `docs/`: modernization decisions and outstanding asset licensing questions.

See [the implementation record](docs/milestone-a.md) for preserved commit hashes
and [asset provenance](docs/asset-provenance.md) for rights-review requirements.

## Development

Use Node **24.21.0** (`nvm use`) and npm **11.19.0**, bundled with that Node release.
Run commands from the repository root:

```sh
npm ci
npm run dev
```

The frontend runs on port 3000 and the API on port 4000. The development command
sets the browser API origin and media origin to the local API. No credentials,
database, or environment files are required. `npm run dev:web` and
`npm run dev:api` run the applications separately; for that arrangement configure
the variables documented in each application's `.env.example`.

For alternate ports, run `API_PORT=4100 WEB_PORT=3100 npm run dev`. The API's
`.env.example` documents shell/hosting variables; Express does not load `.env`
files itself. CRA loads frontend `.env.local` files. Set `BROWSER=none` to keep
the development command from opening a browser.

```sh
npm run build
npm run start:api
```

There is one authoritative root `package-lock.json`. Run dependency updates from
the root with `--workspace @nigerlan/web` or `--workspace @nigerlan/api` as needed.
Do not use Yarn, `--force`, or `--legacy-peer-deps` to resolve conflicts.

There is no authentication or database. Learning progress currently exists only
in browser memory. Existing defects are being preserved for regression testing
before later behavior changes.

## Existing hosting compatibility

Vercel's Root Directory must be the repository root. The root `vercel.json`
configures install `npm ci`, build `npm run build`, and output `apps/web/build`.
The old root-level `build` setting no longer matches the workspace layout; the
file-based output setting overrides it for this branch. CI verifies the configured
directory contains the built HTML and asset manifest after compilation.

Render can use repository root, install `npm ci`, and start `npm run start:api`.
Both hosts must use the declared Node/npm versions. Existing Vercel routing rules
are not changed by this build configuration. Verify dashboard settings and SPA
deep links before approving a production merge or deployment. Connected Git
integrations can automatically attempt preview deployments when a branch is pushed.

Production defaults remain the existing Render API/media origin. Override
`REACT_APP_API_URL` at frontend build time and `ASSET_BASE_URL` on the API host for
previews. These are public URLs, not secrets. Render continues to supply `PORT`.

## Engineering checks

```sh
npm run check:repo
npm run format:check
npm run lint
npm test
npm run build
npm run security:api
npm run security:dependencies
npm run security:install
npm run security:secrets
```

Use `npm run format` to format first-party source. Gitleaks installation is
separate from dependency installation, pinned and checksum verified. The installer
supports macOS ARM64 and Linux x64; other platforms can supply Gitleaks 8.30.1
through `GITLEAKS_BIN`.

**Milestone A is not a green deployment gate.** Strict lint and `CI=true` builds
now pass after the lesson-lifecycle fix; the full dependency audit still fails on
high-severity legacy tooling advisories. These checks remain enabled.
The normal regression suite separates ordinary passes from explicitly named
known-defect checks. `npm run test:known-defects` deliberately reproduces the
seven unresolved assertions without that handling.

See [verification results and CI policy](docs/engineering-quality.md)
and [known defects](docs/known-defects.md) before reviewing or deploying changes.
