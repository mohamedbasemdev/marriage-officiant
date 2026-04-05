
function switchTab(id, el) {
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  el.classList.add("active");
}

function toggleNav() {
  document.getElementById("main-nav").classList.toggle("open");
}
