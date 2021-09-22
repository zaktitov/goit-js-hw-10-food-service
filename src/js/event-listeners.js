import { refs } from "./dom.js"
const { menuList, inputWrapper, body, input, inputChecked } = refs;

input.addEventListener('change', onInputChecked);
function onInputChecked(e) { body.classList.toggle("dark-theme")};




