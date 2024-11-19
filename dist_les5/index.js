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
        let e = s[t]?.parentNode?.id;
        s[t].remove();
        let n = Array.from(document.querySelectorAll(".task_li")).map((e) => ({
          text: e.innerText.split("\n\n")[1],
        }));
        "tasks" == e && l(n), "mainTasks" == e && o(n);
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
            N("", t);
        })),
        r &&
          ((r = !1),
          a.addEventListener("mousedown", (e) => {
            e.preventDefault(),
              a.appendChild(o),
              (o.style.position = "static"),
              N(t, "");
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
  let { getTaskStore: k, setTaskStore: h } = p("choice"),
    T = k(),
    f = new Map([...T]);
  console.log(f);
  const y = function () {
    let e = document.getElementById("tasks"),
      t = document.getElementById("mainTasks");
    [...document.querySelectorAll(".li")].forEach((n) => {
      n.addEventListener("change", () => {
        let s = n.parentNode.parentNode;
        console.log(n),
          n.checked
            ? (f.set(s.innerText.split("\n\n")[1], 2), t.appendChild(s))
            : (f.set(s.innerText.split("\n\n")[1], 1), e.appendChild(s)),
          h([...f]);
      });
    });
  };
  function S(e, t) {
    let n = document.querySelector(t);
    "#tasks" == t && (n.innerHTML = v(!0, e)),
      "#mainTasks" == t && (n.innerHTML = v(!1, e)),
      "#tasks" == t && u(),
      y();
  }
  function v(e, t) {
    let n = "";
    for (let s = 0; s < t.length; s++)
      null != t[s] &&
        (n += `<li draggable="true" class="task_li">\n                <p class="numberTask">${s + 1}</p>\n                <input type="checkbox" name="" class="cross" id="">\n                <p class="task">${t[s]}</p>\n                <button class="btnDelete">Delete</button>\n                <div class="choice_section">\n      <input ${e ? "" : "checked"} class="li" id="s2${s}" name="s${s}1" type="checkbox">\n       <label id="l1" for="s2${s}">\n      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>      \n</label>\n      <label id="l2" for="s2${s}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label>\n\n                </div>\n            </li>`);
    return n;
  }
  const { getTask: x, setTask: E } = e("leftSection"),
    { getTaskRight: b, setTaskRight: w } = t("rightSection");
  let { getTaskStore: I, setTaskStore: L } = p("choice"),
    q = { setRight: new Set([...b()]), setLeft: new Set([...x()]) },
    B = I();
  function N(e, t) {
    "" != e && (q.setLeft.add(e), q.setRight.delete(e)),
      "" != t && (q.setRight.add(t), q.setLeft.delete(t)),
      E(Array.from(q.setLeft)),
      w(Array.from(q.setRight)),
      A();
  }
  function A() {
    let e = x();
    const t = b();
    S(e, "#tasks"),
      S(t, "#mainTasks"),
      n(),
      (document.querySelector(".addedTasks").textContent =
        `All tasks: ${q.setLeft.size + q.setRight.size}`);
  }
  new Map([...B]);
  const R = function () {
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
      (e.innerText = ""), 0 == s.length ? (N(t, ""), n()) : (e.innerText = s);
    });
  };
  window.addEventListener("load", () => {
    !(function () {
      let e = document.getElementById("loading");
      A(), (e.style.display = "none");
    })(),
      R(),
      n(),
      u();
  });
})();
//# sourceMappingURL=index.js.map
