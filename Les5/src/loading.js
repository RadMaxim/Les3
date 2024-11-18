import { updateLenghtArr } from "./data.js";

function waited() {
  let loading = document.getElementById("loading");
  updateLenghtArr();
  loading.style.display = "none";
}
export { waited };
