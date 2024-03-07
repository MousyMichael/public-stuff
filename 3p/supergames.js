window.onload = () => {
var style = document.createElement("style");
  style.innerHTML = '.easter-egg-imp {color:lime!important;}';
var docBody = document.querySelector("body"); 
  docbody.appendChild(style)
var ah = document.querySelector(".easter-egg-imp");
  ah.innerHTML = 'Patches, additional features, and bug fixes by MousyM';
  
  const allGameButtons = doucment.querySelectorAll("a"); 
  allGameButtons.forEach((b) => {
    if(b.getAttribute("target") == "_blank") {
      b.removeAttribute("target"); 
    } 
  });
}
