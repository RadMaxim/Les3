import { arrays, ArrayUpdate } from "./data.js";

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
  let infoOfDraggedElement = draggedElement.innerText.split("\n\n")[1];

  if (isDragging) {
    isDragging = false;
    right.addEventListener("mousedown", (e) => {
      e.preventDefault();
      right.appendChild(draggedElement);
      draggedElement.style.position = "static";
      let newArr = [...arrays.rightArray].push(infoOfDraggedElement);
      let uniq = new Set([...newArr]);
      console.log(uniq);

      ArrayUpdate({
        rightArray: uniq,
      });
    });
  }
  if (isDragging) {
    isDragging = false;
    left.addEventListener("mousedown", (e) => {
      e.preventDefault();
      left.appendChild(draggedElement);
      draggedElement.style.position = "static";
      let newArr = [...arrays.leftArray].push(infoOfDraggedElement);
      let uniq = new Set([...newArr]);
      console.log(uniq);
      ArrayUpdate({
        leftArray: uniq,
      });
    });
  }
};
function dragAndDropEvent() {
  [...elem].forEach((elem) => {
    // Делегирование событий на левом списке
    elem.addEventListener("mousedown", handlerMousDown);
  });
  // Обработчики событий для всего документа
  document.addEventListener("mousemove", handlerMouseMove);

  document.addEventListener("mouseup", handlerMouseUp);
}
export default dragAndDropEvent;
