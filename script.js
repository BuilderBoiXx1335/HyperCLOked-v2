function launchProxy() {
  let url = document.getElementById("urlInput").value.trim();

  // Auto-fix missing protocol
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Open in new tab
  window.open(url, "_blank");
}
