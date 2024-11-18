import saveTask from "./saveLocalStorage.js";
import saveRightDone from "./saveRightDone.js";

function deleteElem() {
  let btnDelete = document.getElementsByClassName("btnDelete");
  let elemOfList = document.querySelectorAll(".task_li");
  let { setTask } = saveTask("leftSection");
  const { setTaskRight } = saveRightDone("rightSection");
  Array.from(btnDelete).forEach((elem, index) => {
    elem.addEventListener("click", () => {
      let info = elemOfList[index];
      elemOfList[index].remove();

      let allLeftElem = Array.from(document.querySelectorAll(".task_li")).map(
        (elem) => {
          return {
            text: elem.innerText.split("\n\n")[1],
          };
        },
      );
      if (info.parentElement?.classList[0] == "tasks") {
        setTask(allLeftElem);
      } else {
        setTaskRight(allLeftElem);
      }
    });
  });
}
export { deleteElem };
