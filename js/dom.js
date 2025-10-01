// dom.js
export function displayUsers(users, container) {
    container.innerHTML = '';
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

export function displayError(message, container) {
    container.innerHTML = `<p style="color:red;">${message}</p>`;
}
