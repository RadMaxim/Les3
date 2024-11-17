function dragAndDropRight() {
  let left = document.getElementById("tasks");
  let right = document.getElementById("mainTasks");
  let isDragging = false;
  let offsetX, offsetY;
  let draggedElement;

  // Делегирование событий на левом списке
  document.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("task_li")) {
      isDragging = true;
      draggedElement = e.target;
      offsetX = e.clientX - draggedElement.offsetLeft;
      offsetY = e.clientY - draggedElement.offsetTop;
      draggedElement.style.position = "absolute";
      draggedElement.style.zIndex = 100; // Устанавливаем z-index для видимости над другими элементами
    }
  });

  // Обработчики событий для всего документа
  document.addEventListener("mousemove", (e) => {
    console.log("mousemove");
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      draggedElement.style.left = `${x}px`;
      draggedElement.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      right.addEventListener("mousemove", (e) => {
        console.log("up");
        e.preventDefault();
        right.appendChild(draggedElement);
        draggedElement.style.position = "static";
      });

      //     e.preventDefault();
      //             left.appendChild(draggedElement);
      //             draggedElement.style.position = "static";

      //         });
    }
  });
}
function dragAndDropLeft() {
  let left = document.getElementById("tasks");

  let isDragging = false;
  let offsetX, offsetY;
  let draggedElement;

  // Делегирование событий на левом списке
  document.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("task_li")) {
      isDragging = true;
      draggedElement = e.target;
      offsetX = e.clientX - draggedElement.offsetLeft;
      offsetY = e.clientY - draggedElement.offsetTop;
      draggedElement.style.position = "absolute";
      draggedElement.style.zIndex = 100; // Устанавливаем z-index для видимости над другими элементами
    }
  });

  // Обработчики событий для всего документа
  document.addEventListener("mousemove", (e) => {
    console.log("mousemove");
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      draggedElement.style.left = `${x}px`;
      draggedElement.style.top = `${y}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      left.addEventListener("mousemove", (e) => {
        console.log("up");
        e.preventDefault();
        left.appendChild(draggedElement);
        draggedElement.style.position = "static";
      });

      //     e.preventDefault();
      //             left.appendChild(draggedElement);
      //             draggedElement.style.position = "static";

      //         });
    }
  });
}
export { dragAndDropRight, dragAndDropLeft };
