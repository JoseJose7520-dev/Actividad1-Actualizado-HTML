function verificar() {
    let edadInput = document.getElementById("edad");
    let resultadoInput = document.getElementById("resultado");

    let edad = edadInput.value.trim();

    if (edad === "" || isNaN(edad) || parseFloat(edad) <= 0) {
        alert("Por favor, ingresa un número positivo válido.");
        resultadoInput.value = "";
        return;
    }

    edad = parseFloat(edad);

    // Evaluar si la edad es suficiente para votar
    if (edad >= 18) {
        resultadoInput.value = "Puedes votar";
    } else {
        resultadoInput.value = "No puedes votar";
    }
}