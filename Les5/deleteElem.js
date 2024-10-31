import {arr} from "./index.js"
window.addEventListener("load",()=>{
    console.log("success", arr);

})
function findElemAndDelete(arr) {
     Array.from(document.getElementsByClassName("delete"))
    .forEach((element,index) => {
      element.addEventListener("click",()=>{
          console.log(element, index);
          arr =  Array.from(arr).filter((val, ind)=>ind!=index)
      })
      
    });
    
    }
export {findElemAndDelete}
