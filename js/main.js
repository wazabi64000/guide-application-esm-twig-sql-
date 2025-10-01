// main.js
import { fetchUsers } from './api.js';
import { displayUsers, displayError } from './dom.js';

const loadUsersBtn = document.getElementById('loadUsersBtn');
const usersContainer = document.getElementById('usersContainer');

loadUsersBtn.addEventListener('click', async () => {
    try {
        const users = await fetchUsers();
        displayUsers(users, usersContainer);
    } catch (error) {
        displayError(error.message, usersContainer);
    }
});
