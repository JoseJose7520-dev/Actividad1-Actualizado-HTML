function convertir() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");

    let celsius = celsiusInput.value.trim();

    // Validar que no esté vacío y que sea un número válido
    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        fahrenheitInput.value = "";
        return;
    }

    // Convertir a número y aplicar la fórmula: F = (C * 9/5) + 32
    let resultado = (parseFloat(celsius) * 9 / 5) + 32;

    // Mostrar el resultado en el campo bloqueado
    fahrenheitInput.value = resultado.toFixed(1) + " °F";
}