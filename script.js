function launchProxy() {
  const input = document.getElementById("urlInput");
  if (!input) return;

  let url = input.value.trim();
  if (!url) return;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Use Titanium Network's Ultraviolet mirror
  const proxyBase = "https://ultraviolet.titaniumnetwork.org/service/";
  const proxiedURL = proxyBase + encodeURIComponent(url);

  // Load proxy in the same tab
  window.location.href = proxiedURL;
}
