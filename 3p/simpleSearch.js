//Welcome to SimpleSearch for SuperGames. 
//This file allows users to search through HTML elements based on an text input. 
//Feel free to customize the configuration below
const sSConf = {
   elemsToSearch:".button h2",
   queryElementId:"search-bar", 
   classToApply:"hidden",
	 
};


window.onload = () => { 
  document.getElementById(sSConf.queryElementId).addEventListener("input", (ev) => {
      if(document.getElementById(sSConf.queryElementId).value < 0) {
  	document.querySelectorAll(sSConf.elemsToSearch).forEach((bh) => {
    	   bh.parentElement.parentElement.classList.remove(sSConf.classToApply);
   	});
      } else {
  	searchElements();
  }
 });
}
function searchElements() {
var allE = document.querySelectorAll(sSConf.elemsToSearch);
var query = document.getElementById(sSConf.queryElementId).value;
allE.forEach((ae) => {
	if(ae.textContent.toLowerCase().includes(query) == true) {
  	if(ae.parentElement.parentElement.classList.contains(sSConf.classToApply) == true) {
    	ae.parentElement.parentElement.classList.remove(sSConf.classToApply)
    } 
  } else {
  	if(ae.parentElement.parentElement.classList.contains(sSConf.classToApply) !== true) {
    	ae.parentElement.parentElement.classList.add(sSConf.classToApply);
    }
  }
});

} 
