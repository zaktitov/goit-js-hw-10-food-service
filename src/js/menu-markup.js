import data from "./menu.json";
import cardSet from "../templates/menuMkUp.hbs";
import { refs } from "./dom";
const { menuList, inputWrapper, body, input } = refs;

menuList.insertAdjacentHTML("afterbegin",cardSet(data))