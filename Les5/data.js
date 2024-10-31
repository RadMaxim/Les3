let arr = [];

function updateArr(updateArr) {
    arr = updateArr;
}
function updateLengthArr() {
    let addedTasks = document.querySelector(".addedTasks");
    addedTasks.textContent = `Tasks: ${arr.length}`;
}
export {arr, updateArr, updateLengthArr}