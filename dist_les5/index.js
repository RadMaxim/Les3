(() => {
  "use strict";
  let e = [];
  function t(t) {
    e = t;
  }
  function n() {
    document.querySelector(".addedTasks").textContent = `Tasks: ${e.length}`;
  }
  function d() {
    let d = document.getElementsByClassName("btnDelete");
    Array.from(d).forEach((d, a) => {
      d.addEventListener("click", () => {
        e.splice(a, 1), t(e), n(), l(e);
      });
    });
    let a = document.getElementById("tasks"),
      s = document.getElementById("mainTasks"),
      o = document.getElementsByClassName("task_li");
    for (let e of o)
      e.addEventListener("dragstart", function (e) {
        let t = e.target;
        s.addEventListener("dragover", function (e) {
          e.preventDefault();
        }),
          s.addEventListener("drop", function (e) {
            s.appendChild(t), (t = null);
          }),
          a.addEventListener("dragover", function (e) {
            e.preventDefault();
          }),
          a.addEventListener("drop", function (e) {
            a.appendChild(t), (t = null);
          });
      });
  }
  function l(e) {
    let t = document.getElementById("tasks"),
      n = (document.getElementById("mainTasks"), "");
    for (let t = 0; t < e.length; t++)
      n += `<li draggable="true" class="task_li">\n                <p class="numberTask">${t + 1}</p>\n                <input type="checkbox" name="" id="">\n                <p class="task">${e[t].text}</p>\n                \n                <button class="btnDelete">Delete</button>\n            </li>`;
    (t.innerHTML = n), d();
  }
  window.addEventListener("load", () => {
    !(function () {
      console.log("wed1");
      for (let e = 0; e < 1e4; e++);
      document.getElementById("loading").style.display = "none";
    })(),
      document.querySelector(".addedTasks"),
      document.getElementById("add").addEventListener("click", () => {
        let d = { text: document.getElementById("task_text").value };
        e.push(d), t(e), n(), l(e);
      });
  });
})();
