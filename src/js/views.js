
export function loginPage() {
    document.getElementById('main').innerHTML = `
    <section id="login" class="hidden">
        <div class="login-container">
            <h2>Iniciar sesión</h2>

            <form id="login-form">
                <input type="text" id="login-username" placeholder="Usuario" autocomplete="username" required />
                <input type="password" id="login-password" placeholder="Contraseña" autocomplete="current-password"
                    required />
                <button type="submit">Entrar</button>
            </form>

            <p class="login-switch">
                ¿No tienes cuenta?
                <a href="#" id="login-go-register">Regístrate aquí</a>
            </p>
        </div>
    </section>`;

    document.getElementById('login-form').onsubmit = async e => {
        e.preventDefault();
        
    }
} 

    document.getElementById('form').onsubmit = async e => {
        e.preventDefault();
        try {
            await auth.login(e.target.e.value, e.target.p.value);
            location.hash = '#/dashboard';
            router();
        } catch (err) {
            alert(err.mesage);
        };
    };