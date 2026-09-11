// Serves the built Astro site and stamps a randomly chosen theme on the html
// element. First visit rolls a theme and sets a cookie, later visits reuse it,
// clearing cookies rolls again. No client side JavaScript involved.
const THEMES = ["ink","royal","mist","terracotta","soot","teal","harbor",
                "camel","oxblood","carbon","petrol","slate","bone"];
const COOKIE = "ad_theme";

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const type = response.headers.get("content-type") || "";
    if (!type.includes("text/html")) return response;

    const cookie = request.headers.get("cookie") || "";
    const match = cookie.match(/(?:^|;\s*)ad_theme=([a-z]+)(?:;|$)/);
    let theme = match && THEMES.includes(match[1]) ? match[1] : null;
    const fresh = !theme;
    if (fresh) {
      theme = THEMES[crypto.getRandomValues(new Uint32Array(1))[0] % THEMES.length];
    }

    const rewritten = new HTMLRewriter()
      .on("html", { element: (el) => el.setAttribute("data-theme", theme) })
      .transform(response);

    const headers = new Headers(rewritten.headers);
    headers.set("cache-control", "private, no-store");
    if (fresh) {
      headers.append("set-cookie",
        COOKIE + "=" + theme + "; Path=/; Max-Age=31536000; SameSite=Lax; Secure");
    }
    return new Response(rewritten.body, { status: rewritten.status, headers });
  }
};
