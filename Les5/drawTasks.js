import { deleteElem } from "./ButtonDelete.js";

function drawElem(arr) {
    let tasks = document.getElementById("tasks");

    let li = ``;
    for (let index = 0; index < arr.length; index++) {
      li += `<li class="task_li">
                <p class="numberTask">${index + 1}</p>
                <input type="checkbox" name="" id="">
                <p class="task" contenteditable="true">${arr[index].text}</p>
                
                <button class="btnDelete">Delete</button>
            </li>`;
    }
    tasks.innerHTML = li;
    deleteElem();
    // let observer = new MutationObserver(mutationRecords => {
    //    mutationRecords.forEach((el,index)=>{
    //     console.log(el);
    //     console.log(index);
    //     }); // console.log(изменения)
    //   });
    // let elem = document.getElementsByClassName("task_li")
    // Array.from(elem).forEach((el,ind)=>{
    //     console.log(ind);
    //     observer.observe(el, {
    //         childList: true, // наблюдать за непосредственными детьми
    //         subtree: true, // и более глубокими потомками
    //         characterDataOldValue: true // передавать старое значение в колбэк
    //       });
    
    // })
      // наблюдать за всем, кроме атрибутов
      
    
}
export {drawElem}