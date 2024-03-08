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
}
