let arr = [];
// для хранения всех элементов
function updateArr(arrNew) {
  arr = arrNew;
  console.log(arr);
}
// для обновления нашего массива
function updateLenghtArr() {
  let addedTasks = document.querySelector(".addedTasks");
  addedTasks.textContent = `Tasks: ${arr.length}`;
}
export { arr, updateArr, updateLenghtArr };
