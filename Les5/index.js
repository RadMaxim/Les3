let arr = []
window.addEventListener("load",()=>{
    let todoList = document.getElementById("todoList")
    let loader = document.getElementById("loader")
    let task = document.getElementById("task")
    let add = document.getElementById("add")
    for (let index = 0; index < 5000; index++) { 
    }

   
    loader.style.display="none"
   
    let count = 0;
    add.addEventListener("click",()=>{
        
        let taskObj = {
            task:task.value,
            count:count
        }    
        
        arr.push(taskObj)
        let list_li = ``;
        for (let index = 0; index < arr.length; index++) {
            list_li+=`<li class="li_task">
<p>${index}</p>                    <p>${arr[index].task}</p>
                    
                        <input type="checkbox">
                        <button>delete</button>
                    
                </li>`
            
        }


todoList.innerHTML = list_li         


    })


    
})