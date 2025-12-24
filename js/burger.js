const burger = document.querySelector(".burger-meny");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  mobileNav.addEventListener("click", (e) => {
    if (e.target === mobileNav) {
      document.body.classList.remove("menu-open");
    }
  });
}
