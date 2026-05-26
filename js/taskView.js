// Ce fichier gere le rendu dans le DOM de l'application apres les modifications apportées par le taskModel et le store
// , c'est à dire l'ajout, la suppression et la modification des tâches,
// ainsi que la validation de l'input de l'utilisateur
import { readLocalStorage } from "./store.js";
const listUl = document.querySelector(".listTask");

export function displayTask() {
  const data = readLocalStorage();
  listUl.innerHTML = "";
  for (let i = 0; i < data.task.length; i++) {
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    li.className = "task-item";
    li.innerHTML = `
     
                <div class="task-main">
                  <input type="checkbox" class="task-checkbox" id="${data.task[i].id} />
                  <label for="check-1" class="task-text"
                    >${data.task[i].nameTask} </label
                  >
                </div>
                <div class="task-badges">
                ${
                  data.task[i].isInProgress
                    ? (span2.innerHTML = `<span class="badge status-going">En cours</span>`)
                    : (span2.innerHTML = `<span class="badge status-completed">Terminée</span>`)
                }
                ${
                  data.task[i].priority === "Haute"
                    ? (span1.innerHTML = `<span class="badge priority-high">${data.task[i].priority}</span>`)
                    : data.task[i].priority === "Moyenne"
                      ? (span1.innerHTML = `<span class="badge priority-middle">${data.task[i].priority}</span>`)
                      : (span1.innerHTML = `<span class="badge priority-low">${data.task[i].priority}</span>`)
                }
                
                
                </div>


                <div class="task-actions">
                  <!-- Bouton Modifier -->
                  <button class="btn-action btn-edit" title="Modifier">
                    <svg
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
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </button>
                  <!-- Bouton Supprimer -->
                  <button class="btn-action btn-delete" title="Supprimer">
                    <svg
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
