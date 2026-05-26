//Fichier JS maitre d'orchestre qui gere les fcihier js : store, taskModel et taskView
//importation des modules

import { createTask } from "/js/taskModel.js";
// Fonction pour tester le resulat
function result(res) {
  return console.log(res);
}

const btnAddTask = document.querySelector("#btnAddTask");
const btnBack = document.querySelector("#btnBack");

const valueStorage = JSON.parse(localStorage.getItem("Tasks"));
result(valueStorage);
//localStorage.clear();
btnAddTask.addEventListener("click", () => {
  createTask();
});
