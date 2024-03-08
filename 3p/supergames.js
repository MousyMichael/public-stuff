window.onload = () => {
alert("Hey everyone, games now remain hidden from GoGuardian when launched from a hidden window!");
  var allGameElements = document.querySelectorAll("a"); 
  allGameElements.forEach((btn) => {
    var btnTarget = btn.getAttribute("target"); 
    if(btnTarget == "_blank") {
      btn.removeAttribute("target")
    } else {
      btn.removeAttribute("target")
    }
  });
  var hangoutBtn = document.getElementById("mousy"); 
  hangoutBtn.addEventListener("click", sgePopup('Mousys Hangout', ''));
}
function sgePopup(pName, pContent) {
  var data = '<div class="internal-popup"><div class="internal-top"><div class="top-l">SuperGames - Patch Notes</div><div class="top-r"><span id="close-pop">X</span></div></div><div class="popupcontent"></div></div>';
  var external = document.createElement("div");
  external.innerHTML = data;
  external.classList = 'sge-popup popup sg-popup';
  
  document.querySelectory(".top-l").innerHTML = pName;
  document.querySelector(".popupcontent").innerHTML = pContent;
  document.getElementById("close-pop").addEventListener("click", (e) => {
    
  });
