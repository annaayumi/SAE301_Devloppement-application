// menu burger
function initMenuBurger() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".glass-nav");

    if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", initMenuBurger);
