window.onload = () => {
var ah = document.querySelector(".easter-egg-imp");
  ah.innerHTML = 'Patches, additional features, and bug fixes by MousyM';
  
  const allGameButtons = doucment.querySelectorAll("a"); 
  allGameButtons.forEach((b) => {
    if(b.getAttribute("target") == "_blank") {
      b.removeAttribute("target"); 
    } 
  });
}
