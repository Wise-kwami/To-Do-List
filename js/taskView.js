// Ce fichier gere le rendu dans le DOM de l'application apres les modifications apportées par le taskModel et le store
// , c'est à dire l'ajout, la suppression et la modification des tâches,
// ainsi que la validation de l'input de l'utilisateur
import { readLocalStorage } from "./store.js";
import { updateStatus, deleteTask } from "./taskLogic.js";
const listUl = document.querySelector(".listTask");
const dataLocalStorage = readLocalStorage();
export function displayTask(data) {
  listUl.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const input = document.createElement("input");
    li.className = "task-item";
    li.innerHTML = `
     
                <div class="task-main">
                ${
                  data[i].isFinished
                    ? (input.innerHTML = `<input type="checkbox" class="task-checkbox" checked  id="${data[i].id}"/>`)
                    : (input.innerHTML = `<input type="checkbox" class="task-checkbox" id="${data[i].id}" />`)
                }
                  <label for="check-1" class="task-text"
                    >${data[i].nameTask} 
                    </label
                  >
                </div>
                <div class="task-badges">
                ${
                  data[i].isFinished
                    ? (span2.innerHTML = `<span class="badge status-completed">Terminée</span>`)
                    : (span2.innerHTML = `<span class="badge status-going">En cours</span>`)
                }
                ${
                  data[i].priority === "haute"
                    ? (span1.innerHTML = `<span class="badge priority-high">${data[i].priority}</span>`)
                    : data[i].priority === "moyenne"
                      ? (span1.innerHTML = `<span class="badge priority-middle">${data[i].priority}</span>`)
                      : (span1.innerHTML = `<span class="badge priority-low">${data[i].priority}</span>`)
                }
                
                
                </div>


                <div class="task-actions">
               
                  <!-- Bouton Supprimer -->
                  <button class="btn-action btn-delete" title="Supprimer">
                    <svg
                    class= "delete"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
    `;

    listUl.appendChild(li);
  }
}

export function displayInitTask() {
  listUl.innerHTML = `<div class="not-tasks">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
 stroke-linecap="round" stroke-linejoin="round" 
 class="lucide lucide-ban-icon lucide-ban">
 <circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>
 </svg>

  <h3>Aucune tache</h3>

  </div>

  
  `;
}
