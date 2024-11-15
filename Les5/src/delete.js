import { arr, rightArr, updateArr, updateLenghtArr } from "./data.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";
const { getTaskRight, setTaskRight } = saveRightDone("right_done");
const { getTask, setTask } = saveTask("arrTask");

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

      right.addEventListener("dragover", function (e) {
        e.preventDefault();
        console.log("right dragover");
      });
      right.addEventListener("drop", function () {
        rightArr.push(obj);
        setTaskRight(rightArr);
        let arrNew = Array.from(arr).filter((val) => val.num != obj.num);
        console.log(arrNew);

        right.appendChild(selected);
      });
      left.addEventListener("dragover", function (e) {
        e.preventDefault();
        console.log("left dragover");
      });
      left.addEventListener("drop", function () {
        console.log("left drop");
        arr.push(obj);
        updateArr(arr);
        left.appendChild(selected);
      });
    });
  }
}
export { deleteElem };
