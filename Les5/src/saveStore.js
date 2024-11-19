const saveStore = (nameKept) => {
  const setTaskStore = (arrTask) => {
    console.log(arrTask);

    localStorage.setItem(nameKept, JSON.stringify(arrTask));
  };

  const getTaskStore = () => {
    if (localStorage.getItem(nameKept) == undefined) {
      return [];
    }
    return JSON.parse(localStorage.getItem(nameKept));
  };

  if (!localStorage.getItem(nameKept)) {
    setTaskStore([]);
  }

  return { getTaskStore, setTaskStore };
};

export default saveStore;
