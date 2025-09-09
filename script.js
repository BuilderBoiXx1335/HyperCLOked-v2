function launchProxy() {
  const input = document.getElementById("urlInput");
  const iframe = document.getElementById("proxyFrame");
  if (!input || !iframe) return;

  let url = input.value.trim();
  if (!url) return;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Corrosion proxy endpoint
  const proxyBase = "https://corrosion.thedev.id/service/";
  const proxiedURL = proxyBase + encodeURIComponent(url);

  iframe.src = proxiedURL;
}

function toggleCloak() {
  const cloak = document.getElementById("cloakOverlay");
  if (!cloak) return;

  cloak.style.display = (cloak.style.display === "none") ? "block" : "none";
}
