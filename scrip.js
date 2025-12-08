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
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const clase = document.getElementById("clase").value.trim();

    // NOMBRE
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre completo.");
        return;
    }
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    // TELÉFONO
    if (telefono === "") {
        alert("Por favor, ingresa tu número de teléfono.");
        return;
    }
    if (!/^[0-9]+$/.test(telefono)) {
        alert("El teléfono solo debe contener números.");
        return;
    }
    if (telefono.length < 8) {
        alert("El teléfono debe tener al menos 8 dígitos.");
        return;
    }

    // EDAD
    if (edad === "") {
        alert("Por favor, ingresa tu edad.");
        return;
    }
    if (edad <= 0 || edad > 100) {
        alert("Ingresa una edad válida.");
        return;
    }

    // CLASE
    if (clase === "") {
        alert("Por favor, ingresa la clase que deseas tomar.");
        return;
    }
    
    alert("Datos enviados correctamente ");

    formulario.submit();
});


