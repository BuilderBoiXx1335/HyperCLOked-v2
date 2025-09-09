// Launch proxy inside iframe
function launchProxy() {
  const input = document.getElementById("urlInput");
  const iframe = document.getElementById("proxyFrame");
  if (!input || !iframe) return;

  let url = input.value.trim();
  if (!url) return;

  // Ensure valid URL format
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Rammerhead proxy (browser shell)
  const proxyBase = "https://rammerhead.thedev.id/";
  const proxiedURL = proxyBase + encodeURIComponent(url);

  // Load into iframe
  iframe.src = proxiedURL;
}

// Toggle cloak with "K" key
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "k") {
    const cloak = document.getElementById("cloakOverlay");
    if (!cloak) return;

    cloak.style.display = (cloak.style.display === "none") ? "block" : "none";
  }
});
