import { refs } from "./dom.js";
const { menuList, inputWrapper, body, input, inputCheckedState } = refs;

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
input.addEventListener("change", onInputChange);

if (localStorage.getItem("theme") == Theme.DARK) {
	input.checked = true;
	body.classList.add("dark-theme");
}

function onInputChange() {
  if (input.checked) {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", Theme.DARK);
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
