let list = document.querySelector("#list");

let submit = document.querySelector("#submit");

//grabing filter
let option = document.querySelector("#filter");

//fingure out how to display filtered task (pending , completed , all)
task = [];

submit.addEventListener("click", (event) => {
  addTask();
});

//adding task to list
function addTask() {
  let div = document.createElement("div");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let userInput = document.querySelector("#todo").value;
  task.push({ task: userInput, status: false }); // intial status false

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "Completed";

  div.append(checkbox);
  div.append(userInput);
  div.append(completedButton);
  div.append(deleteButton);
  list.append(div);

  deleteButton.addEventListener("click", (event) => {
    div.remove();
  });
  completedButton.addEventListener("click", (event) => {
    checkbox.checked = true;

    updateStatus(userInput, true); // updating status of task
  });

  //listingi for change on checkbox
  checkbox.addEventListener("change", () => {
    updateStatus(userInput, checkbox.checked);
  });

  console.log(task);
}

function updateStatus(userInput, status) {
  //getting the index of changed task
  const index = task.findIndex((eachTask) => {
    return eachTask.task === userInput;
  });
  console.log(index); // getting -1 value it lacks returns --sol write one line arrow fn
  if (index != -1) {
    task[index].status = status;
  }
}

// filtering part -- made problems -- forEach
/**
 * process -- identify what the user is selection from all pending and completed
 * use filter method inside and filter the task arr
 * clear the all task from list
 */
option.addEventListener("change", () => {
  let selected = option.value;

  filter(selected);
});

//clearing
function clear() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

//taske to make filter work
function filter(selected) {
  clear();

  if (selected === "all") {
    task.forEach((task) => {
      show(task);
    });
  } else if (selected === "pending") {
    let result = task.filter((task) => {
      return task.status === false;
    });
    result.forEach((task) => {
      show(task);
    });
  } else {
    let result = task.filter((task) => {
      return task.status === true;
    });
    result.forEach((task) => {
      show(task);
    });
  }
}

function show(task) {
  let div = document.createElement("div");
  // let checkbox = document.createElement("input");
  // checkbox.type = "checkbox";

  // div.append(checkbox);
  div.append(task.task);
  list.append(div);
}
