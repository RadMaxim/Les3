import { ArrayUpdate } from "./data.js";

let left = document.getElementById("tasks");
let right = document.getElementById("mainTasks");
let elem = document.getElementsByClassName("task_li");
let isDragging = false;
let offsetX, offsetY;
let draggedElement;

function handlerMousDown(e) {
  if (e.target.classList.contains("task_li")) {
    isDragging = true;
    draggedElement = e.target;
    offsetX = e.clientX - draggedElement.offsetLeft;
    offsetY = e.clientY - draggedElement.offsetTop;
    draggedElement.style.position = "absolute";
    draggedElement.style.zIndex = 10;
  }
}
function handlerMouseMove(e) {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
  }
}
const handlerMouseUp = (e) => {
  let infoOfDraggedElement = draggedElement?.innerText?.split("\n\n")[1];

  if (isDragging) {
    isDragging = false;
    right.addEventListener("mousedown", (e) => {
      e.preventDefault();
      right.appendChild(draggedElement);
      draggedElement.style.position = "static";
      ArrayUpdate("", infoOfDraggedElement);
    });
  }
  if (isDragging) {
    isDragging = false;
    left.addEventListener("mousedown", (e) => {
      e.preventDefault();
      left.appendChild(draggedElement);
      draggedElement.style.position = "static";
      ArrayUpdate(infoOfDraggedElement, "");
    });
  }
};
function dragAndDropEvent() {
  [...elem].forEach((elem) => {
    elem.addEventListener("mousedown", handlerMousDown);
  });
  document.addEventListener("mousemove", handlerMouseMove);

  document.addEventListener("mouseup", handlerMouseUp);
}
export default dragAndDropEvent;
