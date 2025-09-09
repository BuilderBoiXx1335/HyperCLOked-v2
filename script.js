function launchProxy() {
  const input = document.getElementById("urlInput");
  if (!input) return;

  let url = input.value.trim();
  if (!url) return;

  // Ensure the URL starts with http/https
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Doge0 Ultraviolet proxy endpoint
  const proxyBase = "https://uv.doge0.repl.co/service/";
  const proxiedURL = proxyBase + encodeURIComponent(url);

  // Open proxied site in a new tab
  window.open(proxiedURL, "_blank");
}
