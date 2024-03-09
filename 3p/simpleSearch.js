window.onload = () => { 
  document.getElementById("search-bar").addEventListener("input", (ev) => {
      if(document.getElementById("search-bar").value < 0) {
  	document.querySelectorAll(".button h2").forEach((bh) => {
    	   bh.parentElement.parentElement.classList.remove("hidden");
   	});
      } else {
  	searchElements();
  }
 });
}
function searchElements() {
var allE = document.querySelectorAll(".button h2");
var query = document.getElementById("search-bar").value;
allE.forEach((ae) => {
	if(ae.textContent.toLowerCase().includes(query) == true) {
  	if(ae.parentElement.parentElement.classList.contains("hidden") == true) {
    	ae.parentElement.parentElement.classList.remove("hidden")
    } 
  } else {
  	if(ae.parentElement.parentElement.classList.contains("hidden") !== true) {
    	ae.parentElement.parentElement.classList.add("hidden");
    }
  }
});

} 
