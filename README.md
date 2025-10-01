# Projet API ESM - Documentation Complète

Ce projet crée une application web simple qui récupère des données depuis une API publique et les affiche, en utilisant **JavaScript moderne avec ESM (ECMAScript Modules)**.

---

## Structure du projet

```
/projet-api-esm
│-- index.html
│-- style.css
│-- js/
    │-- main.js
    │-- api.js
    │-- dom.js
```

* `index.html` : structure HTML.
* `style.css` : styles de la page.
* `js/` : dossier contenant les modules JavaScript.
* `api.js` : module pour appeler l’API.
* `dom.js` : module pour manipuler et afficher le DOM.
* `main.js` : module principal qui coordonne tout.

---

## Étape 1 : HTML de base (`index.html`)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet API ESM</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Projet API JSONPlaceholder (ESM)</h1>
    </header>

    <main>
        <section id="user-section">
            <h2>Liste des utilisateurs</h2>
            <!-- Bouton pour charger les utilisateurs -->
            <button id="loadUsersBtn">Charger les utilisateurs</button>
            <!-- Conteneur pour afficher les utilisateurs -->
            <div id="usersContainer"></div>
        </section>
    </main>

    <!-- Chargement du module principal -->
    <script type="module" src="./js/main.js"></script>
</body>
</html>
```

**Explications** :

* `type="module"` permet l’utilisation de `import/export` dans JavaScript.
* `loadUsersBtn` : déclenche la récupération des utilisateurs.
* `usersContainer` : conteneur pour afficher dynamiquement les utilisateurs.

---

## Étape 2 : Styles CSS (`style.css`)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 1rem;
    text-align: center;
}

main {
    padding: 2rem;
}

button {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
}

#usersContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

.user-card {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

**Explications** :

* Utilisation d’une grille CSS pour afficher les cartes utilisateur.
* Styles simples pour le bouton et les cartes.

---

## Étape 3 : Module API (`js/api.js`)

```javascript
// api.js
// Module pour gérer les appels à l'API

export async function fetchUsers() {
    try {
        // Appel à l'API JSONPlaceholder pour récupérer les utilisateurs
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Erreur lors de la récupération des utilisateurs');
        const users = await response.json();
        return users;
    } catch (error) {
        // Propagation de l'erreur pour être gérée ailleurs
        throw error;
    }
}
```

**Explications** :

* `fetch` : récupère les données depuis l’API.
* `async/await` : simplifie la gestion des promesses.
* Gestion des erreurs avec `try/catch`.

---

## Étape 4 : Module DOM (`js/dom.js`)

```javascript
// dom.js
// Module pour manipuler le DOM

// Affiche les utilisateurs dans le container
export function displayUsers(users, container) {
    container.innerHTML = ''; // Vider le container avant l'affichage
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Ville:</strong> ${user.address.city}</p>
        `;
        container.appendChild(userCard);
    });
}

// Affiche un message d'erreur
export function displayError(message, container) {
    container.innerHTML = `<p style="color:red;">${message}</p>`;
}
```

**Explications** :

* `displayUsers` : génère dynamiquement les cartes utilisateurs.
* `displayError` : affiche un message d’erreur dans le DOM.

---

## Étape 5 : Module principal (`js/main.js`)

```javascript
// main.js
// Module principal qui relie API et DOM

import { fetchUsers } from './api.js';
import { displayUsers, displayError } from './dom.js';

// Sélection des éléments du DOM
const loadUsersBtn = document.getElementById('loadUsersBtn');
const usersContainer = document.getElementById('usersContainer');

// Événement sur le bouton
loadUsersBtn.addEventListener('click', async () => {
    try {
        const users = await fetchUsers(); // Récupération des utilisateurs
        displayUsers(users, usersContainer); // Affichage des utilisateurs
    } catch (error) {
        displayError(error.message, usersContainer); // Affichage de l'erreur
    }
});
```

**Explications** :

* Importation des fonctions depuis `api.js` et `dom.js`.
* Ajout d’un **écouteur d’événement** sur le bouton.
* Gestion des erreurs pour informer l’utilisateur.

---

## Étape 6 : Fonctionnement étape par étape

1. L’utilisateur ouvre `index.html`.
2. Clique sur **"Charger les utilisateurs"**.
3. `main.js` déclenche la fonction `fetchUsers` dans `api.js`.
4. Les données sont récupérées depuis l’API JSONPlaceholder.
5. `displayUsers` dans `dom.js` crée et affiche les cartes utilisateur.
6. Si une erreur survient, `displayError` affiche un message.

---

## Conseils supplémentaires

* Ajouter une **barre de recherche** pour filtrer les utilisateurs.
* Ajouter des **animations CSS** pour l’apparition des cartes.
* Base solide pour apprendre la **modularisation avec ESM**.

---

 **Félicitations !**

Tu as maintenant un projet fonctionnel, modulable et facile à étendre.


1. Qu’est-ce qu’une API ?

API signifie Application Programming Interface (Interface de Programmation d’Applications).
C’est un ensemble de règles et de méthodes qui permet à deux applications de communiquer entre elles.

Exemple simple :

Ton application web veut récupérer la météo.

Au lieu de créer toutes les données météo toi-même, tu peux interroger une API météo.

L’API reçoit ta requête, puis renvoie les données sous un format que ton application peut utiliser (souvent JSON).

Résumé en points :

L’API est un intermédiaire entre deux logiciels.

Elle standardise la manière de demander et d’envoyer des données.

Elle permet de réutiliser des services sans tout recréer.

2. Comment ça fonctionne ?

Tu envoies une requête à l’API via HTTP (souvent GET, POST, PUT, DELETE).
Exemple : GET https://api.example.com/users pour obtenir la liste des utilisateurs.

L’API traite ta requête sur le serveur.

L’API te renvoie une réponse, généralement au format JSON :

3. Qu’est-ce que JSONPlaceholder ?

JSONPlaceholder est une API publique gratuite de test.
Elle sert à s’entraîner à utiliser des API sans avoir besoin de créer un serveur réel.

Ce que tu peux faire avec JSONPlaceholder :

Récupérer des utilisateurs : GET https://jsonplaceholder.typicode.com/users

Récupérer des posts : GET https://jsonplaceholder.typicode.com/posts

Récupérer des commentaires : GET https://jsonplaceholder.typicode.com/comments