const saveTask = () => {
  const setTask = (arrTask) => {
    localStorage.setItem("arrTask", JSON.stringify(arrTask));
  };

  const getTask = () => {
    if (localStorage.getItem("arrTask") == undefined) {
      return [];
    }
    return JSON.parse(localStorage.getItem("arrTask"));
  };

  if (!localStorage.getItem("arrTask")) {
    setTask([]);
  }

  return { getTask, setTask };
};

export default saveTask;
