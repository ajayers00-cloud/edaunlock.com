# EDA Unlock support website

Public Support, Privacy, and Terms pages for EDA Unlock, hosted by Cloudflare Worker `eda-unlock-support` at https://edaunlock.com. The canonical host is the apex domain; HTTP and www requests redirect there over HTTPS.

## Validate and preview

Node 22.13+ is required. Run `npm ci`, then `npm run check` (lint, TypeScript, production build, and rendered-route/security tests). Run `npm audit` to check current dependency advisories. `npm run dev` starts a local preview.

Worker bindings and runtime types are generated with `npx wrangler types` from `wrangler.jsonc`. Do not hand-edit `worker-configuration.d.ts`. The unused image transformation endpoint is disabled; images are static.

## Release content

`content/release.json` records the native version/build, inventory totals, source seed SHA-256, and policy versions. Homepage counts come from this manifest. Before changing a release, verify against the native seed:

```sh
node scripts/verify-release.mjs /absolute/path/to/native/TollgateCore/Sources/TollgateCore/Resources/question-banks.seed.json
```

September 22, 2026 corrections restore the adult-only audience already presented in native build 23. The policy acceptance identifier remains `2026-08-04.1`; the pages separately disclose the website clarification date. This correction does not alter the app's acceptance records. A future material policy change must coordinate a new version and acceptance behavior in the native app rather than silently changing the website identifier alone.

The unverified 1–2 day support response estimate was removed. Existing email retention/deletion commitments were preserved; their operational fulfillment remains the owner's responsibility.

## Publish

After `npm run check` passes, use:

```sh
npx wrangler deploy --config dist/server/wrangler.json --dry-run
npx wrangler deploy --config dist/server/wrangler.json --keep-vars
```

Authenticate with `npx wrangler login` when needed. Both custom domains are configured in `wrangler.jsonc`. No secrets belong in source control. GitHub Actions runs checks and dependency auditing; pushing GitHub source alone is not configured to deploy this Worker.

The repository currently includes generated `dist` output. Regenerate it with each release so the checked-in package matches the source. GitHub and Cloudflare must be updated together.

Public routes: `/`, `/privacy`, `/terms`, `/sitemap.xml`, `/robots.txt`, `/og.jpg`, and `/favicon.svg`. `/og.png` remains for older shared links. Verify published routes, redirects, inventory facts, and policy text after deployment. This checkout is independent of the older `support-site/` directory in the app project.
