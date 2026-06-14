// Ce fichier gere le rendu dans le DOM de l'application apres les modifications apportées par le taskModel et le store
// , c'est à dire l'ajout, la suppression et la modification des tâches,
// ainsi que la validation de l'input de l'utilisateur

import { readLocalStorage } from "./store.js";
import {
  classPriority,
  classStatus,
  classStatusText,
  classCheckBox,
} from "./taskLogic.js";

const listUl = document.querySelector(".listTask");

export function displayTask(data) {
  listUl.innerHTML = "";
  // data.tasks = readLocalStorage();
  if (data.tasks === undefined || data.tasks.length === 0) {
    displayInitTask();
  } else {
    for (let i = 0; i < data.tasks.length; i++) {
      const li = document.createElement("li");
      li.className = "task-item";
      li.innerHTML = `
     
                <div class="task-main">
                <input ${classCheckBox(data.tasks[i].isFinished)}  id="${data.tasks[i].id}"/>
                

                  <label for="${data.tasks[i].id}" class="task-text"
                    >${data.tasks[i].nameTask} 
                    </label
                  >
                </div>
                <div class="task-badges">
                <span class="${classStatus(data.tasks[i].isFinished)}">${classStatusText(data.tasks[i].isFinished)}</span>
                <span class= "${classPriority(data.tasks[i].priority)}">${data.tasks[i].priority}</span>
                </div>


                <div class="task-actions" id="${data.tasks[i].id}">
               
                  <!-- Bouton Supprimer -->
                  <button class="btn-action btn-delete" title="Supprimer" id="${data.tasks[i].id}">
                    <svg
                    class= "delete"
                    id="${data.tasks[i].id}"
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
}

export function displayInitTask() {
  listUl.innerHTML = `<div class="not-tasks">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
 stroke-linecap="round" stroke-linejoin="round" 
 class="lucide lucide-ban-icon lucide-ban">
 <circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/>
 </svg>

  <h3>Aucune tâche</h3>

  </div>

  
  `;
}
