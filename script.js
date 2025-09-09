function launchProxy() {
  const input = document.getElementById("urlInput");
  const iframe = document.getElementById("proxyFrame");
  if (!input || !iframe) return;

  let url = input.value.trim();
  if (!url) return;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Swap this line to test different proxies
  const proxyBase = "https://uv.titaniumnetwork.dev/service/";
  const proxiedURL = proxyBase + encodeURIComponent(url);

  iframe.src = proxiedURL;
}

// Cloak toggle with "K" key
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "k") {
    const cloak = document.getElementById("cloakOverlay");
    if (!cloak) return;
    cloak.style.display = (cloak.style.display === "none") ? "block" : "none";
  }
});

