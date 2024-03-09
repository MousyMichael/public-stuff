function openHiddenWindow(url) {
    var hWin = window.open("",""); 
  
  if(hWin) {
    var header = document.createElement("div");
    header.innerHTML = 'This tab is hidden from GoGuardian so your teacher cannot see this page!<span style="font-weight:bold;font-size:16px;color:gray;text-shadow:none;">Window cloaking developed by MousyM</span>';
    header.id = 'header';
    hs = header.style;
    hs.display = 'flex';
    hs.flexDirection = 'column';
    hs.justifyContent = 'center';
    hs.alignItems = 'center'
    hs.fontSize = '20px';
    hs.width = '95%';
    hs.color = 'lime';
    hs.fontFamily = 'arial';
    hs.textShadow = '0 0 15px lime';
    hs.backgroundColor = '#161616';
    hs.height = '55px';
    hs.border = '1.5px #2A2A2A solid'
    hs.position = 'absolute';
    hs.top = '5px';
    hs.marginLeft = '2.5%';
    hs.borderRadius = '10px';
    hs.zIndex = '200';
    hs.boxShadow = '0 0 18px 5px black';
    
    var contentFrame = document.createElement("iframe")
    contentFrame.src = url;
    cfs = contentFrame.style; 
    cfs.width = '100%';
    cfs.top = '0px';
    cfs.height = '100%';
    cfs.zIndex = '100';
    cfs.border = 'none';
    cfs.position = 'relative';
    
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
