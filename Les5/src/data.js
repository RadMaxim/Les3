let arr = [];
// для хранения всех элементов
function updateArr(arrNew) {
  arr = arrNew;
}
// для обновления нашего массива
function updateLenghtArr() {
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arr.length}`;
}
export { arr, updateArr, updateLenghtArr };
