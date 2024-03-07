window.onload = () => {
var ah = document.querySelector(".easter-egg-imp");
  ah.innerHTML = 'Did you know unblocked search is not hacking? - MousyM';
  ah.addEventListener("click", (e) => {
    alert("wow. you found this.")
    ah.innerHTML = 'Did you know unblocked search originally had over 10 functions just to open a hidden windows? - MousyM';
  });
var all = document.querySelectorAll("span,a,button,p,div");
  all.forEach((e) => {
    e.addEventListener("click", (ev) => {
      ev.style.outline = 'lime solid 2px !important';
    });
  });
}
