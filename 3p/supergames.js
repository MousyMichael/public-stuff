window.onload = () => {
var ah = document.querySelector(".easter-egg-imp");
  ah.innerHTML = 'Did you know unblocked search is not hacking?';
  ah.addEventListener("click", (e) => {
    alert("wow. you found this.")
    ah.innerHTML = 'Did you know unblocked search originally had over 10 functions just to open a hidden windows?';
  });
}

function runWindow() {
  
    var linkStyles = document.createElement("link"); 
    linkStyles.rel = 'stylesheet';
    linkStyles.href = 'https://x.ube.lol/3p/styles.css';
    window.document.head.appendChild(linkStyles)
    ah.addEventListener("click", (e) => {
    
    var popup = document.createElement("div"); 
    popup.classList = 'sge-popup';
    popup.id = 'external-popup';
    popup.innerHTML = '<div class="sge-inner-popup"><textarea id="datas" placeholder="Enter HTML code to open in ab window"></textarea><button id="sge-launch">Open</button><button id="sge-close">Close</button></div>';

    window.document.body.appendChild(popup)
    var closeBtn = document.getElementById("sge-close"); 
    var goBtn = document.getElementById("sge-launch"); 
    goBtn.addEventListener("click", (e) => {
      
      var data = document.getElementById("datas").value 
      var hWin = window.open("","");
      hWin.document.body.innerHTML = data;
      hWin.document.body.style.width = '100vw';
      hWin.document.body.style.height = '100vh';
      hWin.document.body.style.margin = '0px';
      hWin.document.body.style.padding = '0px';

      });
    
      closeBtn.addEventListener("click", (e) => {
      var popupToClose = document.getElementById("external-popup");
      popupToClose.style.display = 'none';
    });
  });
}
