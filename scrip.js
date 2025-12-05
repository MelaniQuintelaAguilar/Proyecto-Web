/* CONTACTANOS */
function initMap() {
    const lugar = { lat: -16.488, lng: -68.133 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: lugar,
    });
    new google.maps.Marker({
        position: lugar,
        map: map,
    });
}
window.onload = initMap;


/* ELENCO */
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // evita el envío por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const clase = document.getElementById("clase").value.trim();

    if (nombre === "") {
        alert("Ingrese su nombre completo");
        return;
    }
    if (!/^[0-9]+$/.test(telefono)) {
        alert("El teléfono debe contener solo números");
        return;
    }
    if (edad === "" || edad <= 0) {
        alert("Ingrese una edad válida");
        return;
    }
    if (clase === "") {
        alert("Ingrese la clase");
        return;
    }

    alert("Formulario enviado correctamente");
    formulario.submit();
});