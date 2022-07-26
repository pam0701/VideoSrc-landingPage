/* const subMenu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#snb .btn_menu");

snbBtn.addEventListener("click", function () {
  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
}); */

const menuTrigger = document.querySelector(".menu-trigger");
const subMenu = document.querySelector("#snb .sub_menu");

menuTrigger.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");

  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
});
