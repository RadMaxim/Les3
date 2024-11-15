(() => {
  "use strict";
  const e = (e) => {
      const t = (t) => {
        localStorage.setItem(e, JSON.stringify(t));
      };
      return (
        localStorage.getItem(e) || t([]),
        {
          getTask: () =>
            null == localStorage.getItem(e)
              ? []
              : JSON.parse(localStorage.getItem(e)),
          setTask: t,
        }
      );
    },
    { getTaskRight: t, setTaskRight: n } = e("arrTaskRight"),
    l = [];
  function s() {
    let e = document.getElementsByClassName("btnDelete");
    Array.from(e).forEach((e, t) => {
      e.addEventListener("click", () => {
        c.splice(t, 1), i(c), o(c);
      });
    });
    let t = document.getElementById("tasks"),
      s = document.getElementById("mainTasks"),
      a = document.getElementsByClassName("task_li");
    for (let e of a)
      e.addEventListener("dragstart", function (e) {
        let o = e.currentTarget,
          a = o.innerText.split("\n\n"),
          r = { num: a[0], text: a[1] };
        l.push(r),
          console.log(l),
          s.addEventListener("dragover", function (e) {
            e.preventDefault(), console.log("right dragover");
          }),
          s.addEventListener("drop", function () {
            n(r), s.appendChild(o);
          }),
          t.addEventListener("dragover", function (e) {
            console.log("left dragover"), e.preventDefault();
          }),
          t.addEventListener("drop", function () {
            console.log("left drop"), t.appendChild(o);
          });
      });
  }
  function o(e) {
    let t = document.getElementById("tasks"),
      n = "";
    for (let t = 0; t < e.length; t++)
      n += `<li draggable="true" class="task_li">\n                <p class="numberTask">${t + 1}</p>\n                <input type="checkbox" name="" id="">\n                <p class="task">${e[t].text}</p>\n                \n                <button class="btnDelete">Delete</button>\n            </li>`;
    (t.innerHTML = n), s();
  }
  const { getTask: a, setTask: r } = e("arrTask");
  let c = a();
  function i(e) {
    r(e), o(e), d();
  }
  function d() {
    document.querySelector(".addedTasks").textContent = `Tasks: ${c.length}`;
  }
  window.addEventListener("load", () => {
    !(function () {
      let t = document.getElementById("loading");
      const { getTask: n } = e("arrTask");
      o(n()), d(), (t.style.display = "none");
    })();
    let t = document.getElementById("add"),
      n = document.getElementById("error");
    t.addEventListener("click", () => {
      let e = { text: document.getElementById("task_text").value },
        t = ((e) => {
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
      (n.innerText = ""), 0 == t.length ? (c.push(e), i(c)) : (n.innerText = t);
    });
  });
})();
//# sourceMappingURL=index.js.map
