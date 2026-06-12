// Ce fichier gere la memoire de l'application,
// c'est à dire le stockage des tâches dans le localStorage du navigateur

export const tasks = [];
const storageKey = "Tasks";

function log(res) {
  return console.log(res);
}
export function saveLocalStorage(task) {
  const data = JSON.parse(localStorage.getItem(storageKey));
  console.log(data);
  if (data) {
    data.push(task);
    const resultJSON = JSON.stringify(data);
    localStorage.setItem(storageKey, resultJSON);
    log("Ok le local storage existe, un ajout est effecué");
  } else {
    tasks.push(task);
    const resultJSON = JSON.stringify(tasks);
    localStorage.setItem(storageKey, resultJSON);
    log("Pas de local storge, on en crée une ");
  }
}

export function readLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem(storageKey));
  return tasks;
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
