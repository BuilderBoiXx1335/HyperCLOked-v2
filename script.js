function launchProxy() {
  const url = document.getElementById("urlInput").value;
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

