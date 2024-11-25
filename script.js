document.addEventListener("DOMContentLoaded", () => {
    const environments = document.querySelectorAll(".environment");

    environments.forEach(environment => {
        const header = environment.querySelector(".environment-header");

        header.addEventListener("click", () => {
            // Cerrar todos los entornos antes de abrir el clicado
            environments.forEach(env => {
                if (env !== environment) {
                    env.classList.remove("active");
                }
            });

            // Alternar el entorno clicado
            environment.classList.toggle("active");
        });
    });
});
