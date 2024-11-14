(() => {
  "use strict";
  const e = () => {
    const e = (e) => {
      localStorage.setItem("arrTask", JSON.stringify(e));
    };
    return (
      localStorage.getItem("arrTask") || e([]),
      {
        getTask: () =>
          JSON.parse(
            "undefined" == localStorage.getItem("arrTask")
              ? '[{"text":"text"}]'
              : localStorage.getItem("arrTask"),
          ),
        setTask: e,
      }
    );
  };
  let t = [];
  function n(n) {
    const { getTask: l, setTask: o } = e();
    (t = n), o(n), s(l());
  }
  function l() {
    document.querySelector(".addedTasks").textContent = `Tasks: ${t.length}`;
  }
  function o() {
    let e = document.getElementsByClassName("btnDelete");
    Array.from(e).forEach((e, o) => {
      e.addEventListener("click", () => {
        t.splice(o, 1), n(t), l(), s(t);
      });
    });
    let o = document.getElementById("tasks"),
      a = document.getElementById("mainTasks"),
      r = document.getElementsByClassName("task_li");
    for (let e of r)
      e.addEventListener("dragstart", function (e) {
        let t = e.currentTarget;
        console.log(e.innerHTML + ":eee"),
          console.log(t + ":ppp"),
          console.log(e.srcElement),
          a.addEventListener("dragover", function (e) {
            e.preventDefault(), console.log("right dragover");
          }),
          a.addEventListener("drop", function () {
            a.appendChild(t);
          }),
          o.addEventListener("dragover", function (e) {
            console.log("left dragover"), e.preventDefault();
          }),
          o.addEventListener("drop", function () {
            console.log("left drop"), o.appendChild(t);
          });
      });
  }
  function s(e) {
    let t = document.getElementById("tasks"),
      n = "";
    for (let t = 0; t < e.length; t++)
      n += `<li draggable="true" class="task_li">\n                <p class="numberTask">${t + 1}</p>\n                <input type="checkbox" name="" id="">\n                <p class="task">${e[t].text}</p>\n                \n                <button class="btnDelete">Delete</button>\n            </li>`;
    (t.innerHTML = n), o();
  }
  window.addEventListener("load", () => {
    !(function () {
      let t = document.getElementById("loading");
      const { getTask: n } = e();
      s(n()), (t.style.display = "none");
    })();
    let o = document.getElementById("add"),
      a = document.getElementById("error");
    o.addEventListener("click", () => {
      let e = { text: document.getElementById("task_text").value },
        o = ((e) => {
          let t = String(e);
          return (
            console.log(t),
            0 == t.length
              ? (console.log("This task must not be empty"),
                "This task must not be empty")
              : 0 == t.replaceAll(/[0-9]/g, "").length
                ? (console.log("This task must not be only number"),
                  "This task must not be only number")
                : 0 == t.replaceAll(/[!-/]/g, "").length
                  ? (console.log(
                      "This task must not contain only special symbol",
                    ),
                    "This task must not contain only special symbol")
                  : ""
          );
        })(e.text).trim();
      (a.innerText = ""),
        0 == o.length ? (t.push(e), n(t), l()) : (a.innerText = o);
    });
  });
})();
//# sourceMappingURL=index.js.map
