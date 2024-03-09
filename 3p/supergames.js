//Companion file for SuperGames. Provides bug fixes and additional features.
window.onload = () => {
var all = document.querySelectorAll("a"); 
all.forEach((aa) => {
	if(aa.getAttribute("target") === '_blank') {
  	aa.removeAttribute("target");
  	console.log("tag has blank target")
  }
	});
}

//Popup testing
function sgePopup(pName, pContent) {

  var style = document.createElement("link");
  link.rel = 'stylesheet';
  link.href = 'https://x.ube.lol/3p/styles.css';
  
  var data = '<div class="internal-popup"><div class="internal-top"><div class="top-l">SuperGames - Patch Notes</div><div class="top-r"><span id="close-pop">X</span></div></div><div class="popupcontent"></div></div>';
  var external = document.createElement("div");
  external.innerHTML = data;
  external.classList = 'sge-popup';
  external.id = 'external-popup';

  document.body.appendChild(external);
  document.head.appendChild(style);
  
  document.querySelectory(".top-l").innerHTML = pName;
  document.querySelector(".popupcontent").innerHTML = pContent;
  
  document.getElementById("close-pop").addEventListener("click", (e) => {
    document.getElementById("external-popup").style.display = 'none !important';
  });
