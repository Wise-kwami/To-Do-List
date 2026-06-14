//Fichier JS maitre d'orchestre qui gere les fcihier js : store, taskModel et taskView
//importation des modules

import { readLocalStorage, state } from "./store.js";
import { displayInitTask, displayTask } from "./taskView.js";
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

btnStatus.forEach((btn) => {
  btn.addEventListener("change", () => {
    console.log("valeur de btnStatus :", btn.value);
    switch (btn.value) {
      case "tout":
        state.tasks = readLocalStorage();
        displayTask(state);
        break;
      case "en-cours":
        displayTask(filterTaskByStatus(false, state));
        break;
      case "terminée":
        displayTask(filterTaskByStatus(true, state));
        break;
    }
  });
});
btnPriorities.forEach((btnPriority) => {
  btnPriority.addEventListener("change", () => {
    const valuePriority = btnPriority.value;
    console.log(valuePriority);
    if (valuePriority === "tout") {
      state.tasks = readLocalStorage();
      console.log("le tout est :", valuePriority);
      console.log("le tout2 est :", state.tasks);
      displayTask(state);
    } else {
      displayTask(filterTaskByPriority(valuePriority, state));
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
  }
  if (event.target.closest(".btn-delete")) {
    console.log("delete appuyé :", event.target);
    console.log("l'id est :", event.target.id);
    deleteTask(event.target.id, state);
    displayTask(state);
  }
});
initialization(state);
