document
  .getElementById("menubuttonicon")
  .addEventListener("click", function () {
    var menu = document.getElementById("hamburgermenu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });

document.addEventListener("click", function (event) {
  var menu = document.getElementById("hamburgermenu");
  var button = document.getElementById("menubuttonicon");
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.add("hidden");
  }
});
