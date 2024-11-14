import { arr, updateArr, updateLenghtArr } from "./data.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
const { getTaskRight, setTaskRight } = saveTask("arrTaskRight");
const rightArr = [];
function deleteElem() {
  let btnDelete = document.getElementsByClassName("btnDelete");
  Array.from(btnDelete).forEach((elem, index) => {
    elem.addEventListener("click", () => {
      arr.splice(index, 1);
      updateArr(arr);
      drawElem(arr);
    });
  });

  let left = document.getElementById("tasks");
  let right = document.getElementById("mainTasks");
  let lists = document.getElementsByClassName("task_li");

  for (let elem of lists) {
    elem.addEventListener("dragstart", function (e) {
      let selected = e.currentTarget;
      let info = selected.innerText.split("\n\n");
      let obj = {
        num: info[0],
        text: info[1],
      };
      rightArr.push(obj);
      console.log(rightArr);

      right.addEventListener("dragover", function (e) {
        e.preventDefault();
        console.log("right dragover");
      });
      right.addEventListener("drop", function () {
        setTaskRight(obj);
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
