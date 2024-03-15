//Search functionality 
window.onload = (page) => {
  document.getElementById("searchBar").addEventListener("input", (ev) => {
    if (document.getElementById("searchBar").value < 0) {
      var gall = document.querySelectorAll("game-tile");
      gall.forEach((g) => {
        if (g.classList.contains("hidden") == true) {
          g.classList.remove("hidden");
        }
      });
    } else {
      searchElements()
    }
  });
}

function searchElements() {
  var query = document.getElementById("searchBar").value.toLowerCase();
  var elems = document.querySelectorAll(".game-name");
  elems.forEach((e) => {
    if (e.textContent.toLowerCase().includes(query) !== true) {
      if (e.parentElement.parentElement.classList.contains("hidden") !== true) {
        e.parentElement.parentElement.classList.add("hidden");
      }
    } else {
      if (e.parentElement.parentElement.classList.contains("hidden") == true) {
        e.parentElement.parentElement.classList.remove("hidden")
      }
    }
  });
}

//Hidden window functionality
