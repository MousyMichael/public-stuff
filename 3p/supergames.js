window.onload = () => {
var ah = document.querySelector(".easter-egg-imp");
  ah.innerHTML = 'Did you know unblocked search is not hacking?';
  ah.addEventListener("click", (e) => {
    alert("wow. you found this.")
    ah.innerHTML = 'Did you know unblocked search originally had over 10 functions just to open a hidden windows?';
  });
var all = document.querySelectorAll("*");
  all.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.style.border = 'green 2px solid !important';
    });
  });
}
