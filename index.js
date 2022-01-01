const dark_mode_checkbox = document.querySelector("#color-scheme");

dark_mode_checkbox.addEventListener("change", function() {
  if (this.checked) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
})