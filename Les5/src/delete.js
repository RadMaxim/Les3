import { arr, updateArr, updateLenghtArr } from "./data.js";
import { drawElem } from "./drawTasks.js";

function deleteElem() {
  let btnDelete = document.getElementsByClassName("btnDelete");
  Array.from(btnDelete).forEach((elem, index) => {
    elem.addEventListener("click", () => {
      arr.splice(index, 1);
      updateArr(arr);
      updateLenghtArr();
      drawElem(arr);
    });
  });

  let left = document.getElementById("tasks");
  let right = document.getElementById("mainTasks");
  let lists = document.getElementsByClassName("task_li");

  for (let elem of lists) {
    elem.addEventListener("dragstart", function (e) {
      let selected = e.currentTarget;
      console.log(e.innerHTML + ":eee");
      console.log(selected + ":ppp");
      console.log(e.srcElement);

      right.addEventListener("dragover", function (e) {
        e.preventDefault();
        console.log("right dragover");
      });
      right.addEventListener("drop", function () {
        right.appendChild(selected);
      });
      left.addEventListener("dragover", function (e) {
        console.log("left dragover");
        e.preventDefault();
      });
      left.addEventListener("drop", function () {
        console.log("left drop");

        left.appendChild(selected);
        // selected = null;
      });
    });
  }
}
export { deleteElem };
