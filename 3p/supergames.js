window.onload = () => {
alert("Hey everyone, games now remain hidden from GoGuardian when launched from a hidden window!");
var ah = document.querySelector(".easter-egg-imp");
  ah.innerHTML = 'Patches, additional features, and bug fixes by MousyM';
  
  const allGameButtons = document.querySelectorAll("a"); 
  allGameButtons.forEach((b) => {
      b.setAttribute("target","_self"); 
  });
}
