document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburguesa");
    const menu = document.getElementById("menuLinks");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });

});
