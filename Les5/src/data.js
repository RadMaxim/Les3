let arr = [];

function updateArr(arrNew) {
  arr = arrNew;
}

function updateLenghtArr() {
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arr.length}`;
}
export { arr, updateArr, updateLenghtArr };
