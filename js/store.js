// Ce fichier gere la memoire de l'application,
// c'est à dire le stockage des tâches dans le localStorage du navigateur
export const store = {
  task: [],
};
const storageKey = "Tasks";
function result(res) {
  return console.log(res);
}

export function saveLocalStorage(tasks) {
  const data = JSON.parse(localStorage.getItem("Tasks"));
  console.log(data);
  if (data) {
    data.task.push(tasks);
    const resultJSON = JSON.stringify(data);
    localStorage.setItem(storageKey, resultJSON);
    result("Ok le local storage existe, un ajout est effecué");
  } else {
    store.task.push(tasks);
    const resultJSON = JSON.stringify(store);
    localStorage.setItem(storageKey, resultJSON);
    result("Pas de local storge, on en crée une ");
  }
}
