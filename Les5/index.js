import { arr, updateLengthArr } from './data.js';
import { drawElem } from './drawTasks.js';
import {waited} from './loading.js'
window.addEventListener("load", () => {
  waited();
  let add = document.getElementById("add");
  add.addEventListener("click", () => {
    let task_text = document.getElementById("task_text");
    let data = {
      text: task_text.value,
    };
   
    arr.push(data);
    updateLengthArr()
    drawElem(arr)
    
  });
});