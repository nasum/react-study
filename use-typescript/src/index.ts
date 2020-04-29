import { init } from "./app";

const div = document.createElement("div");
const textNode = document.createTextNode("Hello");

div.id = "app";
div.appendChild(textNode);

document.body.append(div);

init();
