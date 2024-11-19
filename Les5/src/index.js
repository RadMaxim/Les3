import "./index.css";
import { waited } from "./loading.js";
import { deleteElem } from "./delete.js";
import addElem from "./addElement.js";
import dragAndDropEvent from "./dragAndDrop.js";

window.addEventListener("load", () => {
  waited();
  addElem();
  deleteElem();
  dragAndDropEvent();
});
