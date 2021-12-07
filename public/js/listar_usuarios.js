const lista_cines = document.querySelectorAll(".div-usuario");

lista_cines.forEach((cine) => {
    cine.addEventListener("click", () => {
        window.location.href = "perfil_usuario_admin.html";
    });
});