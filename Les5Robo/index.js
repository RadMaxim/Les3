

window.addEventListener("load",()=>{

    for (let index = 0; index < 10000; index++) {
    }
    let add = document.getElementById("add");
    let tasks = document.getElementById("tasks");
    let loading = document.getElementById("loading");
    loading.style.display="none";
    
    let arr = []
    add.addEventListener("click",()=>{
       
      
        let task_text = document.getElementById("task_text");
        let data = {
            text:task_text.value,
        }
        arr.push(data);
        console.log(arr);
        let li = ``;
        for (let index = 0; index < arr.length; index++) {
                li+=`<li class="task_li">
                <p class="numberTask">${index+1}</p>
                <input id="index_${index}" type="checkbox" name="">
                <label for="index_${index}" class="task">${arr[index].text}</label>
                <button>Delete</button>
            </li>`;  
        }
        tasks.innerHTML = li
    })
})
