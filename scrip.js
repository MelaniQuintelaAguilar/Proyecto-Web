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