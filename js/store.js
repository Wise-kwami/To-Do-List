// Ce fichier gere la memoire de l'application,
// c'est à dire le stockage des tâches dans le localStorage du navigateur
export const store = {
  tasks: [],
};
const storageKey = "Tasks";
function result(res) {
  return console.log(res);
}

export function saveLocalStorage(task) {
  const data = JSON.parse(localStorage.getItem(storageKey));
  console.log(data);
  if (data) {
    data.tasks.push(task);
    const resultJSON = JSON.stringify(data);
    localStorage.setItem(storageKey, resultJSON);
    result("Ok le local storage existe, un ajout est effecué");
  } else {
    store.tasks.push(task);
    const resultJSON = JSON.stringify(store);
    localStorage.setItem(storageKey, resultJSON);
    result("Pas de local storge, on en crée une ");
  }
}

export function readLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem(storageKey));
  return tasks;
}
