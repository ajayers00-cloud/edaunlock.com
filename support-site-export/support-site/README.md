# EDA Unlock public support site

This project builds the anonymous public Support, Privacy, and Terms pages for
the EDA Unlock iOS app. It intentionally has no sign-in, database, forms,
analytics, advertising, cookies, or application API routes.

## Requirements

- Node.js 22.13 or newer
- The versions pinned in `package-lock.json`

## Local validation

```bash
npm ci
npm run build
node --test tests/rendered-html.test.mjs
npm run lint
```

`npm test` combines the production build and rendered-route tests. The build
uses vinext and packages the Sites metadata from `.openai/hosting.json`.

## Release surface

- `/` — support and contact information
- `/privacy` — versioned privacy policy
- `/terms` — versioned supplemental Terms of Use
- `/og.png` and `/favicon.svg` — public metadata assets

Before an App Store submission, verify all three routes anonymously over HTTPS,
confirm their security headers, compare the policy versions and support address
with the native app, and record the deployed URLs in the release evidence.

