function openHiddenWindow(url) {
  var hWin = window.open("",""); 
  
  if(hWin) {
    var header = document.createElement("div");
    header.innerHTML = 'This tab is hidden from GoGuardian so your teacher cannot see this page!<span style="font-weight:bold;font-size:16px;color:gray;text-shadow:none;">Powered By: hideMy.js</span>';
    hs = header.style;
    hs.display = 'flex';
    hs.flexDirection = 'column';
    hs.justifyContent = 'center';
    hs.alignItems = 'center'
    hs.fontSize = '20px';
    hs.width = '100%';
    hs.color = 'lime';
    hs.fontFamily = 'arial';
    hs.textShadow = '0 0 15px lime';
    hs.backgroundColor = '#161616';
    hs.height = '50px';
    
    var contentFrame = document.createElement("iframe")
    contentFrame.src = url;
    cfs = contentFrame.style; 
    cfs.width = '100%';
    cfs.height = 'calc(100% - 50px)';
    cfs.border = 'none';
    
    hws = hWin.document.body.style;
    hws.margin = '0px';
    hws.height = '100vh';
    hws.width = '100vw';
    
    hWin.document.body.appendChild(header)
    hWin.document.body.appendChild(contentFrame)
  } else {
    alert("Oh no! Something went wrong and we can't cloak this window at the moment, please try again later!")
  }

}
