
export const auth = {
    login: async (email, pass) => {
        const users = await api.get (`/users?email=${email}`);
        if (users.length === 0 || users[0] .password !== pass) {
            throw new Error('Credenciales inválidas');
        }
        const user = users[0];
        localStorage.setItem('users', JSON.stringify(user));
    }
};