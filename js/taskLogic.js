// Ce fichier gere les fonctions ajout, suppression et modification des tâches,
// ainsi que la validation de l'input de l'utilisateur
// Fonction pour tester le resulat

import { displayTask, displayInitTask } from "./taskView.js";
import { store, saveLocalStorage, readLocalStorage } from "/js/store.js";
function result(res) {
  return console.log(res);
}
const inputTask = document.getElementById("inputTask");

const radioPriority = document.querySelectorAll(
  ".radio-group input[name=new-priority] ",
);

export function createTask() {
  let inputPriority;

  for (let i = 0; i < radioPriority.length; i++) {
    if (radioPriority[i].checked) {
      inputPriority = radioPriority[i].value;
    }
  }

  if (inputTask.value.trim() !== "") {
    const newTask = {
      id: Date.now(),
      nameTask: inputTask.value,
      priority: inputPriority,
      isInProgress: true,
    };
    //result(newTask);
    saveLocalStorage(newTask);
    displayTask();
  } else {
    return;
  }
}

export function init() {
  const data = readLocalStorage() || [];
  console.log("la donnee vaut : ", data);
  if (data.length === 0) {
    console.log("zero tache");
    displayInitTask();
  } else {
    console.log("Tache existante");
    displayTask();
  }
}
