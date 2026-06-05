//Fichier JS maitre d'orchestre qui gere les fcihier js : store, taskModel et taskView
//importation des modules

import { readLocalStorage } from "/js/store.js";
import { displayInitTask, displayTask } from "/js/taskView.js";
import { createTask, initialization, updateStatus } from "/js/taskLogic.js";
// Fonction pour tester le resulat
function result(res) {
  return console.log(res);
}

const btnAddTask = document.querySelector("#btnAddTask");
const btnBack = document.querySelector("#btnBack");

initialization();

btnAddTask.addEventListener("click", () => {
  createTask();
  displayTask();
});
const data = readLocalStorage() || [];
const btnPriorities = document.querySelectorAll(
  ".radio-group input[name=priority]",
);
btnPriorities.addEventListener("change", (event) => {});
