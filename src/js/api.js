
export const api = {
    url: 'http://localhost:3000',

    get: async param => {
        try {
            const response = await fetch(`${api.url}${param}`);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la petición GET:', error);
            throw error;
        }
    },

    post: async (param, data) => {
        try {
            const response = await fetch(`${api.url}${param}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)                 
            });
            if (!response.ok) {
                throw new Error ('Error al crear lo datos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la petición GET:', error);
            throw error;
        }
    },

    put: async (param, data) => {
        try {
            const response = await fetch(`${api.url}${param}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)                 
            });
            if (!response.ok) {
                throw new Error ('Error al actualizar los datos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la petición PUT:', error);
            throw error;
        }
    },

    delete: async param => {
        try {
            const response = await fetch(`${api.url}${param}`,{
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error ('Error al eliminar los datos');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la petición DELETE:', error);
            throw error;
        }
    }
};
