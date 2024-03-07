window.onload = (e) => {
  var cache {
    url:window.location.href,
    host:window.location.hostname,
  };
  
  var linkStyles = document.createElement("link"); 
  linkStyles.rel = 'stylesheet';
  linkStyles.href = 'https://x.unblockedsearch.xyz/3p/styles.css';
  window.document.head.appendChild(linkStyles)
  
  var ah = document.querySelector(".easter-egg-imp");
  ah.addEventListener("click", (e) => {
    var popup = document.createElement("div"); 
    popup.classList = '';
    popup.innerHTML = '';
    
    window.document.body.appendChild(popup)
  });
}
