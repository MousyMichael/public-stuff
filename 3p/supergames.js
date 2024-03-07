window.onload = (e) => {
  var cache {
    url:window.location.href,
    host:window.location.hostname,
  };
  
  var linkStyles = document.createElement("link"); 
  linkStyles.rel = 'stylesheet';
  linkStyles.href = 'https://x.ube.lol/3p/styles.css';
  window.document.head.appendChild(linkStyles)
  
  var ah = document.querySelector(".easter-egg-imp");
  ah.addEventListener("click", (e) => {
    var popup = document.createElement("div"); 
    popup.classList = 'sge-popup';
    popup.innerHTML = '<div class="sge-inner-popup"><textarea placeholder="Enter HTML code to open in ab window"></textarea><button id="sge-launch">Open</button><button id="sge-close">Close</button></div>';
    
    window.document.body.appendChild(popup)
    

  });
}
