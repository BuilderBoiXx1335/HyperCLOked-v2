function launchProxy() {
  const input = document.getElementById("urlInput");
  if (!input) return;

  let url = input.value.trim();
  if (!url) return;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Route through Doge0 Ultraviolet proxy
  const proxyBase = "https://uv.doge0.repl.co/service/";
  const proxiedURL = proxyBase + encodeURIComponent(url);

  window.open(proxiedURL, "_blank");
}
