// Ce fichier gere la memoire de l'application,
// c'est à dire le stockage des tâches dans le localStorage du navigateur

export const state = {
  tasks: [],
};
const storageKey = "Tasks";

export function saveLocalStorage(task) {
  console.log(state.tasks);
  state.tasks.push(task);
  const resultJSON = JSON.stringify(state.tasks);
  localStorage.setItem(storageKey, resultJSON);
  console.log("Ok le local storage, un ajout est effecué");
}

export function readLocalStorage() {
  try {
    const dataJSON = JSON.parse(localStorage.getItem(storageKey)) || [];
    return dataJSON;
  } catch (error) {
    console.log("Message d'erreur :", error.message);
    return [];
  }
}

export function saveUpdateTask(task) {
  localStorage.setItem(storageKey, JSON.stringify(task));
}

export function addTask(text, priority) {
  const newTask = {
    id: Date.now(),
    nameTask: text,
    priority: priority,
    isFinished: false,
  };
  return newTask;
}
