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

There is no authentication or database. Learning progress currently exists only
in browser memory. Existing defects are being preserved for regression testing
before later behavior changes.
