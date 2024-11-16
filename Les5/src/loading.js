import { updateLenghtArr } from "./data.js";
import { drawElem } from "./drawTasks.js";

function waited() {
  let loading = document.getElementById("loading");
  // drawElem(arrLeft,"#tasks");
  // drawElem(arrRight,"#mainTasks");
  updateLenghtArr();
  loading.style.display = "none";
}
export { waited };
