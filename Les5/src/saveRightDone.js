const saveRightDone = (nameKept) => {
  const setTaskRight = (arrTask) => {
    localStorage.setItem(nameKept, JSON.stringify(arrTask));
  };

  const getTaskRight = () => {
    if (localStorage.getItem(nameKept) == undefined) {
      return [];
    }
    return JSON.parse(localStorage.getItem(nameKept));
  };

  if (!localStorage.getItem(nameKept)) {
    setTaskRight([]);
  }

  return { getTaskRight, setTaskRight };
};

export default saveRightDone;
