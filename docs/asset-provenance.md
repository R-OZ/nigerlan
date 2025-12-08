# Asset provenance and licensing review

The repository being public does not establish permission to redistribute its
contents. No project-wide licence or complete asset attribution record was found
in the original repository. Do not assign a licence to third-party material based
on the backend package's `ISC` metadata.

## Sources preserved during modernization

| Asset group | Original location | Provenance established | Rights status / required follow-up |
| --- | --- | --- | --- |
| Frontend icons, avatars, backgrounds, illustrations | `main:src/components/images/` | Present at frontend commit `ee3e2ef00b820403c0c373cc3685289789c6db47` | Unknown creators, source URLs, and redistribution terms; owner must identify sources |
| Lottie animation JSON | `main:src/components/images/`, `main:src/components/data/` | Same frontend commit | Identify each creator/source and applicable animation licence; preserve required attribution |
| Music, effects, and module introduction recordings | `main:src/components/Sounds/` | Same frontend commit | Confirm music/effect licences, recording ownership, and permission to distribute voices |
| Number reference PDF | `main:src/components/data/numbers.pdf` | Same frontend commit | Confirm author, source, and reproduction permission |
| App icons and screenshots | `main:public/`, `main:screenshots/` | Same frontend commit | Confirm artwork rights and that screenshots contain no personal learner information |
| Pronunciation recordings | `backend:public/audio/` | Present at backend commit `9ccb6f96e5c003bcb4b34604ce0df6ce4fb9f1f1` | Confirm recording ownership, speaker permission, and source; language reviewer must check pronunciation |
| Backend illustrations and animations | `backend:public/images/` | Same backend commit | Identify creators, source URLs, licence text, and attribution obligations |
| Embedded feedback form and linked slides | Frontend Profile/Feedback and Nav components | External Google URLs in original source | Confirm owner, public access intent, collected fields, and retention; no ownership inferred |

After consolidation, frontend locations are under `apps/web/` and backend
locations under `apps/api/`. Original Git objects remain the provenance reference.
Repository history proves where these copies came from, not who owns them.

## Owner decisions still required

1. Select a licence for original code the owner has the right to license.
2. Supply original asset URLs, creator names, licence versions, and permission
   records. Record those per asset when evidence becomes available.
3. Identify assets that require replacement or additional attribution. Do not
   replace educational media until its meaning and pronunciation are checked.
4. Confirm permission to redistribute the number PDF and recordings.
5. Review the external feedback form before inviting children to submit data.

No asset has been declared licence-cleared by this milestone. Historical objects
and branches must not be rewritten to clean up ordinary repository noise. If an
actual credential is discovered later, revoke it first and assess history cleanup
as a separate, explicitly approved operation.
