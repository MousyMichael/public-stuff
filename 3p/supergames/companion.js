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
