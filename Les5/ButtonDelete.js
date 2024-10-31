import { arr, updateArr, updateLengthArr } from "./data.js";
import { drawElem } from "./drawTasks.js";

function deleteElem() {
    let btnDelete = document.getElementsByClassName("btnDelete");
    Array.from(btnDelete).forEach((elem, index)=>{
    elem.addEventListener('click',()=>{
          console.log(index);
          arr.splice(index,1);
          updateArr(arr);
          updateLengthArr()
          drawElem(arr);
    })
    })
}
export {deleteElem}