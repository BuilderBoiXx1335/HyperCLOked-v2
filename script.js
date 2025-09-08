let cloaked = false;
const originalTitle = document.title;

document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "k") {
    cloaked = !cloaked;

    const overlay = document.getElementById("cloak-overlay");
    const banner = document.getElementById("cloak-banner");
    const proxyUI = document.getElementById("proxy-ui");

    if (overlay && banner && proxyUI) {
      overlay.style.display = cloaked ? "block" : "none";
      banner.style.display = cloaked ? "none" : "block";
      proxyUI.style.display = cloaked ? "none" : "block";
      document.title = cloaked ? "New tab" : originalTitle;
    }
  }
});

function launchProxy() {
  const input = document.getElementById("urlInput");
  if (!input) return;

  let url = input.value.trim();
  if (!url) return;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const newTab = window.open();
  if (!newTab) return;

  const iframeHTML = `
    <!DOCTYPE html>
    <html>
    <head><title>Proxy Tab</title></head>
    <body style="margin:0">
      <iframe src="${url}" style="width:100vw;height:100vh;border:none;"></iframe>
    </body>
    </html>
  `;

  newTab.document.open();
  newTab.document.write(iframeHTML);
  newTab.document.close();
}

