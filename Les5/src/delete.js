// import { arr, rightArr, updateArr, updateArrRight, updateLenghtArr } from "./data.js";
// import { drawElem } from "./drawTasks.js";
// import saveTask from "./saveLocalStorage.js";
// import saveRightDone from "./saveRightDone.js";
// const { getTaskRight, setTaskRight } = saveRightDone("right_done");
// const { getTask, setTask } = saveTask("arrTask");

// import { arrLeft } from "./data.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";

function deleteElem() {
  let btnDelete = document.getElementsByClassName("btnDelete");
  let elemOfList = document.querySelectorAll(".task_li");
  let { setTask, getTask } = saveTask("leftSection");
  Array.from(btnDelete).forEach((elem, index) => {
    elem.addEventListener("click", () => {
      elemOfList[index].remove();
      let allLeftElem = Array.from(document.querySelectorAll(".task_li")).map(
        (elem) => {
          return {
            text: elem.innerText.split("\n\n")[1],
          };
        },
      );
      setTask(allLeftElem);

      // arrLeft.splice(index, 1);
      // console.log(arrLeft);

      // setTask(arrLeft);
      // drawElem(arrLeft,"#tasks");
    });
  });
  let left = document.getElementById("tasks");
  let right = document.getElementById("mainTasks");
  let lists = document.getElementsByClassName("task_li");
  // for (let elem of lists) {
  //       elem.addEventListener("dragstart", function (e) {

  //         let selected = e.currentTarget;
  //         let info = selected.innerText.split("\n\n");
  //         let obj = {
  //           text: info[1],
  //         };})
  left.addEventListener("dragover", function (e) {
    e.preventDefault();
    // console.log(obj);
  });
  left.addEventListener("drop", function () {
    // console.log("left drop");
    // let sorted = Array.from(rightArr).filter((elem)=>elem.text!=obj.text)
    // updateArrRight(sorted)
    // arr.push(obj);
    // updateArr(arr);
    // left.appendChild(selected);
  });
  right.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  function handlerDropRight(e) {
    e.preventDefault();
    console.log(e);

    let selected = e.currentTarget;
    let info = selected.innerText.split("\n\n");
    let obj = {
      text: info[1],
    };
    console.log(obj);
  }
  right.removeEventListener("drop", handlerDropRight, true);
  right.addEventListener("drop", handlerDropRight, true);

  // rightArr.push(obj);
  // setTaskRight(rightArr);
  // let sorted = Array.from(arr).filter((elem)=>elem.text!=obj.text)
  // updateArr(sorted)
  // right.appendChild(selected);
}

//   for (let elem of lists) {
//     elem.addEventListener("dragstart", function (e) {
//       let selected = e.currentTarget;
//       let info = selected.innerText.split("\n\n");
//       let obj = {
//         text: info[1],
//       };

//
//
//     });
//   }
// }
export { deleteElem };
