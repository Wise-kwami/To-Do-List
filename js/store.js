// Ce fichier gere la memoire de l'application,
// c'est à dire le stockage des tâches dans le localStorage du navigateur

export const state = {
  tasks: [],
};
const storageKey = "Tasks";

export function saveLocalStorage(task) {
  console.log(state.tasks);
  if (state.tasks) {
    state.tasks.push(task);
    const resultJSON = JSON.stringify(state.tasks);
    localStorage.setItem(storageKey, resultJSON);
    console.log("Ok le local storage existe, un ajout est effecué");
  } else {
    state.tasks.push(task);
    const resultJSON = JSON.stringify(state.tasks);
    localStorage.setItem(storageKey, resultJSON);
    console.log("Pas de local storge, on en crée une ");
  }
}

export function saveTask(task) {
  state.tasks.push(task);
  const resultJSON = JSON.stringify(state.tasks);
  localStorage.setItem(storageKey, resultJSON);
}

export function readLocalStorage() {
  const data = JSON.parse(localStorage.getItem(storageKey)) || [];
  return data;
}
// export loadTaskStorage ()
// {
//   try {
//     const data= JSON.parse(localStorage.getItem(storageKey,))

//   } catch (error) {
//     console.log("Le message d'erreur :", error.message)
//   }
// }

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
