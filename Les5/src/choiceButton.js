import saveStore from "./saveStore.js";
let { getTaskStore, setTaskStore } = saveStore("choice");
let saveArr = getTaskStore();
let map = new Map([...saveArr]);
console.log(map);

function checkBox() {
  let left = document.getElementById("tasks");
  let right = document.getElementById("mainTasks");
  let list_li = document.querySelectorAll(".li");
  [...list_li].forEach((elem) => {
    elem.addEventListener("change", () => {
      let parent = elem.parentNode.parentNode;
      console.log(elem);

      if (elem.checked) {
        map.set(parent.innerText.split("\n\n")[1], 2);
        right.appendChild(parent);
      } else {
        map.set(parent.innerText.split("\n\n")[1], 1);

        left.appendChild(parent);
      }
      setTaskStore([...map]);
    });
  });
}
export default checkBox;
