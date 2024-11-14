import { arr } from "./data.js";
import { drawElem } from "./drawTasks.js";
import saveTask from "./saveLocalStorage.js";

function waited() {
  let loading = document.getElementById("loading");
  const { getTask } = saveTask();

  drawElem(getTask());

  loading.style.display = "none";
}
export { waited };
