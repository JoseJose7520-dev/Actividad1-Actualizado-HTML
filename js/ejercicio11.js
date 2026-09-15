function convertir() {
    let kmInput = document.getElementById("km");
    let millasInput = document.getElementById("millas");

    let km = kmInput.value.trim();

    // Validar
    if (km === "" || isNaN(km)) {
        alert("Por favor, ingresa un número válido.");
        millasInput.value = "";
        return;
    }

    // Convertir a número y aplicar la fórmula: M = K * 0.621371
    let resultado = parseFloat(km) * 0.621371;

    // Mostrar el resultado
    millasInput.value = resultado.toFixed(5);
}