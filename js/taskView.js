// Ce fichier gere le rendu dans le DOM de l'application apres les modifications apportées par le taskModel et le store
// , c'est à dire l'ajout, la suppression et la modification des tâches,
// ainsi que la validation de l'input de l'utilisateur
import { readLocalStorage } from "./store.js";
import { updateStatus, deleteTask } from "./taskLogic.js";
const listUl = document.querySelector(".listTask");

export function displayTask() {
  const data = readLocalStorage();
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
                    ? (input.innerHTML = `<input type="checkbox" class="task-checkbox" checked/>`)
                    : (input.innerHTML = `<input type="checkbox" class="task-checkbox" />`)
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
                  data[i].priority === "Haute"
                    ? (span1.innerHTML = `<span class="badge priority-high">${data[i].priority}</span>`)
                    : data[i].priority === "Moyenne"
                      ? (span1.innerHTML = `<span class="badge priority-middle">${data[i].priority}</span>`)
                      : (span1.innerHTML = `<span class="badge priority-low">${data[i].priority}</span>`)
                }
                
                
                </div>


                <div class="task-actions">
               
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

    const checkbox = li.querySelector(".task-checkbox");
    checkbox.addEventListener("change", () => {
      console.log("checkbox:", i);
      updateStatus(checkbox, i);
    });

    const btnDelete = li.querySelector(".btn-delete");
    btnDelete.addEventListener("click", () => {
      console.log("delete:", i);
      deleteTask(i);
    });

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
