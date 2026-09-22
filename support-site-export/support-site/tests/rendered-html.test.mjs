import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
const release = JSON.parse(await readFile(new URL("../content/release.json", import.meta.url), "utf8"));

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the EDA Unlock support home", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>EDA Unlock Support<\/title>/i);
  assert.match(html, /Official support/);
  assert.ok(html.includes(`<strong>${release.bankCount}</strong><span>learning banks</span>`));
  assert.ok(html.includes(release.authoredQuestionCount.toLocaleString("en-US")));
  assert.match(html, /up to four/);
  assert.match(html, /30-minute/);
  assert.doesNotMatch(html, /Open Settings inside|15,000|62 banks/);
  assert.match(html, /Eda\.learning\.hq@gmail\.com/);
  assert.match(html, /href="\/terms"/);
  assert.match(html, /accounts or cloud restores/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.match(response.headers.get("content-security-policy"), /frame-ancestors 'none'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
});

test("renders the privacy page", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Privacy · EDA Unlock/);
  assert.match(html, /Your learning stays/);
  assert.match(html, /Family Controls/);
  assert.match(html, /August 4, 2026/);
  assert.match(html, /2026-08-04\.1/);
  assert.match(html, /versions and acceptance time of the Terms and Privacy Policy you acknowledged/);
  assert.match(html, /90 days after it is closed/);
  assert.match(html, /expires within 15 minutes/);
  assert.match(html, /excluded from backup and cross-device restore/);
  assert.match(html, /recipient mailbox is operated through Google/);
  assert.match(html, /hosting infrastructure necessarily processes the requested path, IP address, timestamp/);
  assert.match(html, /intended for adults age 18 and older/);
  assert.match(html, /href="\/terms"/);
});

test("renders the terms page", async () => {
  const response = await render("/terms");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Terms of Use · EDA Unlock/);
  assert.match(html, /2026-08-04\.1/);
  assert.match(html, /August 4, 2026/);
  assert.match(html, /Standard Licensed Application End User License Agreement/);
  assert.match(html, /medical, emergency, legal, tax, financial, investment/);
  assert.match(html, /No affiliation or endorsement/);
  assert.match(html, /local emergency-services number/);
  assert.match(html, /intended only for adults age 18 and older/);
  assert.match(html, /Do not use the app if you are under 18/);
  assert.match(html, /does not include advertising, tracking, third-party analytics/);
  assert.match(html, /Eda\.learning\.hq@gmail\.com/);
});

for (const path of ["/", "/privacy", "/terms"]) {
  test(`canonical URL for ${path} uses the fixed production origin`, async () => {
    const response = await render(path);
    const html = await response.text();
    assert.ok(html.includes(`rel="canonical" href="https://edaunlock.com${path}"`));
    assert.match(html, /https:\/\/edaunlock\.com\/og\.jpg/);
  });
}

test("public HTTP and www redirects preserve path and query", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  for (const origin of ["http://edaunlock.com", "http://www.edaunlock.com", "https://www.edaunlock.com"]) {
    const response = await worker.fetch(new Request(`${origin}/privacy?source=help`), {}, {});
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "https://edaunlock.com/privacy?source=help");
  }
});

test("unused image optimizer is not exposed", async () => {
  const response = await render("/_vinext/image?url=https://example.com/image.avif&w=640&q=75");
  assert.equal(response.status, 404);
});

test("release manifest identifies the bundled inventory and policy versions", () => {
  assert.equal(release.bankCount, 46);
  assert.equal(release.authoredQuestionCount, 13730);
  assert.match(release.seedSHA256, /^[a-f0-9]{64}$/);
  assert.equal(release.termsVersion, "2026-08-04.1");
  assert.equal(release.privacyVersion, "2026-08-04.1");
});

test("static assets pass through ASSETS and retain security headers", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  for (const path of ["/assets/app.css", "/og.jpg", "/sitemap.xml", "/robots.txt", "/favicon.svg"]) {
    let requested;
    const response = await worker.fetch(new Request(`https://edaunlock.com${path}`), {
      ASSETS: { fetch: async (request) => { requested = new URL(request.url).pathname; return new Response("asset", { headers: { "cache-control": "public, max-age=3600" } }); } },
    }, {});
    assert.equal(response.status, 200);
    assert.equal(requested, path);
    assert.equal(await response.text(), "asset");
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("cache-control"), "public, max-age=3600");
  }
});
