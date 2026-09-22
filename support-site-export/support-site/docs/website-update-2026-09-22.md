# Build 23 website update

Prepared September 22, 2026 against EDA Unlock 1.0 (23).

- Homepage inventory derives from `content/release.json`: 46 banks, 13,730 authored questions, with the native seed SHA-256 recorded and verified.
- Help and FAQs describe Home/Configure/Library setup paths, four active banks, automatic per-bank progression, starting grades, 30-minute initial cooldown, incorrect-answer explanations, optional authenticated bypass, and manual return to the guarded app.
- Privacy and Terms restore the adult-only audience in the native build. A separate dated website clarification explains the correction; the existing native acceptance identifier is retained.
- Dark EDA-style phone illustration, keyboard focus/skip navigation, fixed canonical links, sitemap, and a 99 KB JPEG social image replace outdated content or metadata. The prior PNG remains for old links.
- Worker routes public HTTP and www to canonical HTTPS. Static assets go through the asset binding and retain security headers. The unused image optimizer is disabled.
- Updated Next, Cloudflare tooling, and vulnerable transitive packages. An image-size 2.0.4 override supplies a patch while avoiding an unnecessary vinext major upgrade.
- Generated Worker types and GitHub validation workflow added. Workflow checks do not automatically deploy.

Validation: lint clean; TypeScript clean; production build successful; 10 rendered/security tests passed; npm audit reported zero known vulnerabilities. Release manifest verified against the native seed. Production preview visually reviewed at 390 and 1280 CSS pixels; no home overflow at 320, 390, or 1280. Both policy pages rendered the adult-only guidance. Cloudflare deployment dry run passed before the final static-asset routing change; that change was then built, tested, and verified in the production preview.

Operational support retention/deletion commitments remain the owner's responsibility. No native app implementation or TestFlight upload is part of this website release.
