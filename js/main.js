//Fichier JS maitre d'orchestre qui gere les fcihier js : store, taskModel et taskView
//importation des modules

import { displayInitTask, displayTask } from "./taskView.js";
import { createTask, init } from "/js/taskLogic.js";
// Fonction pour tester le resulat
function result(res) {
  return console.log(res);
}

const btnAddTask = document.querySelector("#btnAddTask");
const btnBack = document.querySelector("#btnBack");

init();

btnAddTask.addEventListener("click", () => {
  createTask();
  displayTask();
});
