const checkTask = (task) => {
  let tsk = String(task);

  if (tsk.length == 0) {
    console.log("This task must not be empty");

    return "This task must not be empty";
  } else if (tsk.replaceAll(/[0-9]/g, "").length == 0) {
    console.log("This task must not be only number");
    return "This task must not be only number";
  } else if (tsk.replaceAll(/[!-/]/g, "").length == 0) {
    console.log("This task must not contain only special symbol");

    return "This task must not contain only special symbol";
  }

  return "";
};
export default checkTask;
