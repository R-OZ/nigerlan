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

No hosting settings have been changed and nothing has been deployed. A future
Vercel deployment can use repository root, install `npm ci`, build `npm run build`,
and output `apps/web/build`. A future Render deployment can use repository root,
install `npm ci`, and start `npm run start:api`. Both hosts must use the declared
Node/npm versions. Keep existing SPA rewrites on Vercel. Verify dashboard settings
before approving any merge or deployment.

Production defaults remain the existing Render API/media origin. Override
`REACT_APP_API_URL` at frontend build time and `ASSET_BASE_URL` on the API host for
previews. These are public URLs, not secrets. Render continues to supply `PORT`.
