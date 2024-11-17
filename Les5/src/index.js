// import "./index.css";
import { waited } from "./loading.js";
import { deleteElem } from "./delete.js";
import addElem from "./addElement.js";
import { dragAndDropLeft, dragAndDropRight } from "./dragAndDrop.js";

window.addEventListener("load", () => {
  waited();
  addElem();
  deleteElem();
  dragAndDropRight();
  dragAndDropLeft();
});
