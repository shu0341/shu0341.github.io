const menuButton = document.getElementById("menuButton");
const globalNav = document.getElementById("globalNav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  globalNav.classList.toggle("is-open", !isOpen);
});

globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    globalNav.classList.remove("is-open");
  });
});
