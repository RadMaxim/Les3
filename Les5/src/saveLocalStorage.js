const saveTask = (nameKept) => {
  const setTask = (arrTask) => {
    localStorage.setItem(nameKept, JSON.stringify(arrTask));
  };

  const getTask = () => {
    if (localStorage.getItem(nameKept) == undefined) {
      return [];
    }
    return JSON.parse(localStorage.getItem(nameKept));
  };

  if (!localStorage.getItem(nameKept)) {
    setTask([]);
  }

  return { getTask, setTask };
};

export default saveTask;
