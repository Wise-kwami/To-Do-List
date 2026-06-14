# ToDo List

Une application de liste de tâches simple en HTML/CSS/JavaScript. Ce projet permet de créer, afficher, trier et supprimer des tâches avec une gestion persistante via `localStorage`.

## Description

Cette ToDo List propose :
- ajout de tâches avec priorité (`haute`, `moyenne`, `faible`)
- affichage des tâches en cours ou terminées
- suppression de tâches
- mémorisation des tâches dans le navigateur avec `localStorage`
- interface intuitive et moderne

## Fonctionnalités

- Ajouter une tâche avec une priorité sélectionnable
- Marquer une tâche comme terminée avec une case à cocher
- Filtrer les tâches par état : `Tout`, `En cours`, `Terminée`
- Filtrer les tâches par priorité : `Tout`, `Haute`, `Moyenne`, `Faible`
- Sauvegarde automatique des tâches dans le navigateur

## Structure du projet

- `index.html` : structure HTML de l’interface
- `style.css` : styles et mise en page
- `js/main.js` : orchestration des interactions
- `js/store.js` : gestion de l’état et `localStorage`
- `js/taskLogic.js` : logique métier des tâches
- `js/taskView.js` : rendu des tâches dans le DOM

## Installation et utilisation

1. Ouvrir le dossier du projet dans un éditeur ou un navigateur
2. Lancer `index.html` dans un navigateur moderne
3. Ajouter des tâches dans l’interface
4. Utiliser les filtres pour trier par état ou priorité



## Notes techniques

- Le projet utilise `localStorage` pour conserver les tâches entre les sessions
- Les tâches sont stockées comme un tableau JSON sous la clé `Tasks`
- Le code est organisé en modules ES6 pour séparer :
  - la logique de stockage (`store.js`)
  - la logique des tâches (`taskLogic.js`)
  - l’affichage (`taskView.js`)

## Auteur

Projet réalisé par Wise-kwami
