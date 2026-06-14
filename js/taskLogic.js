// Ce fichier gere les fonctions ajout, suppression et modification des tâches,
// ainsi que la validation de l'input de l'utilisateur
// Fonction pour tester le resulat

import { displayTask, displayInitTask } from "/js/taskView.js";
import {
  saveUpdateTask,
  saveLocalStorage,
  readLocalStorage,
  addTask,
  state,
} from "/js/store.js";
// function result(res) {
//   return console.log(res);
// }
const inputTask = document.getElementById("inputTask");

const radioPriority = document.querySelectorAll(
  ".radio-group input[name=new-priority] ",
);
const iconeValidateAddTask = document.querySelector(".validateAddTask");
export function createTask(data) {
  let inputPriority;

  for (let i = 0; i < radioPriority.length; i++) {
    if (radioPriority[i].checked) {
      inputPriority = radioPriority[i].value;
    }
  }

  if (inputTask.value.trim() !== "") {
    const newTask = addTask(inputTask.value, inputPriority);

    saveLocalStorage(newTask);
    inputTask.value = "";
    iconeValidateAddTask.classList.add("activeIcone");
    setTimeout(function () {
      const boxesContainer = document.querySelector(".boxes");
      const dots = document.querySelectorAll(".dot span");
      boxesContainer.classList.remove("show-right");
      dots[1].classList.remove("active-dot");
      dots[0].classList.add("active-dot");
      iconeValidateAddTask.classList.remove("activeIcone");
    }, 2000);
  } else {
    return;
  }
}

export function checkTask(i, btnChecked, data) {
  const task = data.tasks.find((t) => t.id === Number(i));

  if (btnChecked) {
    console.log("la tache avant vaut :", task);
    task.isFinished = true;
    console.log("la tache vaut :", task);
    saveUpdateTask(data.tasks);
    //return data;
  } else {
    console.log("la tache avant vaut :", task);
    task.isFinished = false;
    console.log("la tache vaut :", task);
    saveUpdateTask(data.tasks);
    //return data;
  }
}
export function deleteTask(id, data) {
  const newData = data.tasks.filter((t) => t.id !== Number(id));
  console.log("les données avant le filtre pour supprimer: ", data.tasks);
  console.log("les données apres le filtre pour supprimer: ", newData);
  saveUpdateTask(newData);
}

export function filterTaskByPriority(priority) {
  const data = readLocalStorage();
  const filteredData = data.filter((task) => task.priority === priority);
  console.log("Tâches filtrées : ", filteredData);
  return filteredData;
}
export function filterTaskByStatus(status) {
  const data = readLocalStorage();
  const filteredData = data.filter((task) => task.isFinished === status);
  console.log("Tâches filtrées : ", filteredData);
  return filteredData;
}

export function classPriority(priority) {
  switch (priority) {
    case "haute":
      return "badge priority-high";
    case "moyenne":
      return "badge priority-middle";
    case "faible":
      return "badge priority-low";
    default:
      return "null";
  }
}

export function classStatus(status) {
  return status ? "badge status-completed" : "badge status-going";
}
export function classStatusText(status) {
  return status ? "Terminée" : "En-cours";
}
export function classCheckBox(valueCheckbox) {
  return valueCheckbox
    ? `type="checkbox" class="task-checkbox" checked`
    : `type="checkbox" class="task-checkbox" `;
}

export function initialization(data) {
  if (state.tasks.length === 0) {
    console.log("zero tache");
    displayInitTask();
  } else {
    console.log("Tache existante");
    displayTask(data);
  }
}
