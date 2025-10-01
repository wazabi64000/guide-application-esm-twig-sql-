// api.js
export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Erreur API');
        return await response.json();
    } catch (error) {
        throw error;
    }
}
