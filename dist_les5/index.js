(() => {
  "use strict";
  const e = (e) => {
      const t = (t) => {
        console.log(t), localStorage.setItem(e, JSON.stringify(t));
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
    t = (e) => {
      const t = (t) => {
        localStorage.setItem(e, JSON.stringify(t));
      };
      return (
        localStorage.getItem(e) || t([]),
        {
          getTaskRight: () =>
            null == localStorage.getItem(e)
              ? []
              : JSON.parse(localStorage.getItem(e)),
          setTaskRight: t,
        }
      );
    };
  function n() {
    let n = document.getElementsByClassName("btnDelete"),
      s = document.querySelectorAll(".task_li"),
      { setTask: l } = e("leftSection");
    const { setTaskRight: o } = t("rightSection");
    Array.from(n).forEach((e, t) => {
      e.addEventListener("click", () => {
        let e = s[t];
        s[t].remove();
        let n = Array.from(document.querySelectorAll(".task_li")).map((e) => ({
          text: e.innerText.split("\n\n")[1],
        }));
        "tasks" == e.parentElement?.classList[0] ? l(n) : o(n);
      });
    });
  }
  let s,
    l,
    o,
    a = document.getElementById("tasks"),
    i = document.getElementById("mainTasks"),
    c = document.getElementsByClassName("task_li"),
    r = !1;
  function d(e) {
    e.target.classList.contains("task_li") &&
      ((r = !0),
      (o = e.target),
      (s = e.clientX - o.offsetLeft),
      (l = e.clientY - o.offsetTop),
      (o.style.position = "absolute"),
      (o.style.zIndex = 10));
  }
  function g(e) {
    if (r) {
      const t = e.clientX - s,
        n = e.clientY - l;
      (o.style.left = `${t}px`), (o.style.top = `${n}px`);
    }
  }
  const m = (e) => {
      let t = o?.innerText?.split("\n\n")[1];
      r &&
        ((r = !1),
        i.addEventListener("mousedown", (e) => {
          e.preventDefault(),
            i.appendChild(o),
            (o.style.position = "static"),
            B("", t);
        })),
        r &&
          ((r = !1),
          a.addEventListener("mousedown", (e) => {
            e.preventDefault(),
              a.appendChild(o),
              (o.style.position = "static"),
              B(t, "");
          }));
    },
    u = function () {
      [...c].forEach((e) => {
        e.addEventListener("mousedown", d);
      }),
        document.addEventListener("mousemove", g),
        document.addEventListener("mouseup", m);
    },
    p = (e) => {
      const t = (t) => {
        console.log(t), localStorage.setItem(e, JSON.stringify(t));
      };
      return (
        localStorage.getItem(e) || t([]),
        {
          getTaskStore: () =>
            null == localStorage.getItem(e)
              ? []
              : JSON.parse(localStorage.getItem(e)),
          setTaskStore: t,
        }
      );
    };
  let { getTaskStore: h, setTaskStore: k } = p("choice"),
    f = h(),
    T = new Map([...f]);
  console.log(T);
  const y = function () {
    let e = document.getElementById("tasks"),
      t = document.getElementById("mainTasks");
    [...document.querySelectorAll(".li")].forEach((n) => {
      n.addEventListener("change", () => {
        let s = n.parentNode.parentNode;
        n.checked
          ? (T.set(s.innerText.split("\n\n")[1], 2), t.appendChild(s))
          : (T.set(s.innerText.split("\n\n")[1], 1), e.appendChild(s)),
          k([...T]);
      });
    });
  };
  function S(e, t) {
    let n = document.querySelector(t);
    console.log(e);
    let s = "";
    for (let t = 0; t < e.length; t++)
      null != e[t] &&
        (s += `<li draggable="true" class="task_li">\n                <p class="numberTask">${t + 1}</p>\n                <input type="checkbox" name="" id="">\n                <p class="task">${e[t]}</p>\n                \n                <button class="btnDelete">Delete</button>\n                <div class="choice_section">\n    \n\n           \n\n      <input class="li" id="s2${t}" name="s${t}1" type="checkbox">\n       <label id="l1" for="s2${t}">\n      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>      \n</label>\n      <label id="l2" for="s2${t}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label>\n\n                </div>\n            </li>`);
    (n.innerHTML = s), "#tasks" == t && u(), y();
  }
  const { getTask: v, setTask: E } = e("leftSection"),
    { getTaskRight: x, setTaskRight: b } = t("rightSection");
  let { getTaskStore: w, setTaskStore: I } = p("choice"),
    L = { setRight: new Set([...x()]), setLeft: new Set([...v()]) },
    q = w();
  function B(e, t) {
    "" != e && (L.setLeft.add(e), L.setRight.delete(e)),
      "" != t && (L.setRight.add(t), L.setLeft.delete(t)),
      E(Array.from(L.setLeft)),
      b(Array.from(L.setRight)),
      A();
  }
  function A() {
    let e = v();
    const t = x();
    S(e, "#tasks"),
      S(t, "#mainTasks"),
      n(),
      (document.querySelector(".addedTasks").textContent =
        `All tasks: ${L.setLeft.size + L.setRight.size}`);
  }
  new Map([...q]);
  const N = function () {
    let e = document.getElementById("error");
    document.getElementById("add").addEventListener("click", () => {
      let t = document.getElementById("task_text")?.value,
        s = ((e) => {
          let t = String(e);
          return 0 == t.length
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
                : "";
        })(t).trim();
      (e.innerText = ""), 0 == s.length ? (B(t, ""), n()) : (e.innerText = s);
    });
  };
  window.addEventListener("load", () => {
    !(function () {
      let e = document.getElementById("loading");
      A(), (e.style.display = "none");
    })(),
      N(),
      n(),
      u();
  });
})();
//# sourceMappingURL=index.js.map
