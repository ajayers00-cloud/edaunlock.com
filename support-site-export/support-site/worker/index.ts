import handler from "vinext/server/app-router-entry";

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    // Local previews remain HTTP; only public EDA hosts are canonicalized.
    if ((url.hostname === "edaunlock.com" || url.hostname === "www.edaunlock.com") &&
        (url.protocol !== "https:" || url.hostname !== "edaunlock.com")) {
      url.protocol = "https:";
      url.hostname = "edaunlock.com";
      url.port = "";
      return Response.redirect(url.toString(), 308);
    }
    // All site images are static. Do not expose an unused image-transform API.
    if (url.pathname === "/_vinext/image") {
      return new Response("Not found", { status: 404 });
    }
    const isStaticAsset = url.pathname.startsWith("/assets/") ||
      ["/favicon.svg", "/og.png", "/og.jpg", "/robots.txt", "/sitemap.xml"].includes(url.pathname);
    const response = isStaticAsset
      ? await env.ASSETS.fetch(request)
      : await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self' mailto:; upgrade-insecure-requests");
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Cross-Origin-Resource-Policy", "same-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
    headers.set("Referrer-Policy", "no-referrer");
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
