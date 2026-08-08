import assert from "node:assert/strict";
import test from "node:test";

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
  assert.match(html, /<strong>62<\/strong><span>learning banks<\/span>/);
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
