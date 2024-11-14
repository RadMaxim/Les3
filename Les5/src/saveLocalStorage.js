const saveTask = () => {
  const setTask = (arrTask) => {
    localStorage.setItem("arrTask", JSON.stringify(arrTask));
  };

  const getTask = () => {
    const tasks = JSON.parse(
      localStorage.getItem("arrTask") == "undefined"
        ? "[{\"text\":\"text\"}]"
        : localStorage.getItem("arrTask"),
    );
    return tasks;
  };

  // Инициализация localStorage при первом запуске
  if (!localStorage.getItem("arrTask")) {
    setTask([]);
  }

  return { getTask, setTask };
};

export default saveTask;
