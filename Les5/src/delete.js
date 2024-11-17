import saveTask from "./saveLocalStorage.js";

function deleteElem() {
  let btnDelete = document.getElementsByClassName("btnDelete");
  let elemOfList = document.querySelectorAll(".task_li");
  let { setTask } = saveTask("leftSection");
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
    });
  });
}
export { deleteElem };
