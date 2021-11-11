const lista_cines = document.querySelectorAll(".div-cine");

lista_cines.forEach((cine) => {
    cine.addEventListener("click",() => {
        window.location.href = "perfil_cine.html";
    });
});