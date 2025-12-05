document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menuLinks");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });

});
