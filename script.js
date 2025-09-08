let cloaked = false;
const originalTitle = document.title;

document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "k") {
    cloaked = !cloaked;
    document.getElementById("cloak-overlay").style.display = cloaked ? "block" : "none";
    document.getElementById("cloak-banner").style.display = cloaked ? "none" : "block";
    document.title = cloaked ? "New tab" : originalTitle;
  }
});

function launchProxy() {
  let url = document.getElementById("urlInput").value.trim();

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const newTab = window.open();
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
