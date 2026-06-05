// Ce fichier gere les fonctions ajout, suppression et modification des tâches,
// ainsi que la validation de l'input de l'utilisateur
// Fonction pour tester le resulat

import { displayTask, displayInitTask } from "./taskView.js";
import {
  saveUpdateTask,
  saveLocalStorage,
  readLocalStorage,
} from "/js/store.js";
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
      isFinished: false,
    };
    //result(newTask);
    saveLocalStorage(newTask);
    displayTask();
  } else {
    return;
  }
}

export function initialization() {
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

export function updateStatus(btnCheckBox, index) {
  const data = readLocalStorage();
  if (btnCheckBox.checked) {
    data[index].isFinished = true;
    console.log(data[index]);
    saveUpdateTask(data);
    initialization();
  } else {
    data[index].isFinished = false;
    console.log(data[index]);
    saveUpdateTask(data);
    initialization();
  }
}

export function deleteTask(index) {
  const data = readLocalStorage();
  console.log("la tache supprimée est :", data[index]);
  const newData = data.filter((task, indexNewData) => indexNewData !== index);
  console.log("newData vaut : ", newData);
  saveUpdateTask(newData);
  initialization();
}
