function dragAndDrop() {
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
      // Здесь можно добавить логику для помещения элемента в right, например:
      // right.appendChild(draggedElement);
    }
  });
}

export default dragAndDrop;
