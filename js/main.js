//Fichier JS maitre d'orchestre qui gere les fcihier js : store, taskModel et taskView
//importation des modules

import { readLocalStorage, state } from "/js/store.js";
import { displayInitTask, displayTask } from "/js/taskView.js";
import {
  createTask,
  filterTaskByPriority,
  filterTaskByStatus,
  checkTask,
  initialization,
  deleteTask,
} from "/js/taskLogic.js";

// Fonction pour tester le resulat

state.tasks = readLocalStorage();
console.log("la donnee vaut : ", state.tasks);
const btnAddTask = document.querySelector("#btnAddTask");
const btnBack = document.querySelector("#btnBack");
const btnPriorities = document.querySelectorAll(
  ".radio-group input[name=priority]",
);
const btnStatus = document.querySelectorAll(".radio-group input[name=state]");
const listUL = document.querySelector(".listTask");

btnStatus.forEach((btnStatus) => {
  btnStatus.addEventListener("change", () => {
    console.log(btnStatus.value);
    switch (btnStatus.value) {
      case "tout":
        console.log("la radio est tout");
        displayTask(state);
        break;
      case "termine":
        console.log("la radio est terminée");
        displayTask(filterTaskByStatus(true));
        break;
      case "en-cours":
        console.log("la radio est en cours");
        displayTask(filterTaskByStatus(false));
        break;
    }
  });
});
btnPriorities.forEach((btnPriority) => {
  btnPriority.addEventListener("change", () => {
    const valuePriority = btnPriority.value;
    console.log(valuePriority);

    switch (valuePriority) {
      case "tout":
        console.log("la radio est tout");
        console.log("Mes données en avant : ", readLocalStorage());
        displayTask(state);
        break;
      case "haute":
        console.log("la radio est haute");
        console.log("Mes données en avant : ", readLocalStorage());

        const taskDisplayFilteredByPriority =
          filterTaskByPriority(valuePriority);
        displayTask(taskDisplayFilteredByPriority);
        break;
      case "moyenne":
        console.log("la radio est moyenne");
        console.log("Mes données en avant : ", readLocalStorage());
        const taskDisplayFilteredByPriority2 =
          filterTaskByPriority(valuePriority);
        displayTask(taskDisplayFilteredByPriority2);
        break;
      case "faible":
        console.log("la radio est faible");
        console.log("Mes données en avant : ", readLocalStorage());
        const taskDisplayFilteredByPriority3 =
          filterTaskByPriority(valuePriority);
        displayTask(taskDisplayFilteredByPriority3);
        break;
    }
  });
});
btnAddTask.addEventListener("click", () => {
  // displayTask(createTask(state));
  createTask(state);
  displayTask(state);
});
listUL.addEventListener("click", (event) => {
  if (event.target.classList.contains("task-checkbox")) {
    // console.log(event.target.id);
    // console.log("le bouton checkbox vaut :", event.target.checked);
    checkTask(event.target.id, event.target.checked, state);
    displayTask(state);
  }
  if (event.target.classList.contains("delete")) {
    console.log("un bouton delete");
    console.log("l'id est :", event.target.id);
    deleteTask(event.target.id, state);
    displayTask(state);
  }
});
initialization(state);
