function convertir() {
    let mxnInput = document.getElementById("mxn");
    let usdInput = document.getElementById("usd");

    let mxn = mxnInput.value.trim();


    let tasaDeCambio = 0.055;

    if (mxn === "" || isNaN(mxn) || parseFloat(mxn) <= 0) {
        alert("Por favor, ingresa un numero positivo vlido.");
        usdInput.value = "";
        return;
    }

    
    let resultado = parseFloat(mxn) * tasaDeCambio;

    // Mostrar el resultado en el campo bloqueado
    usdInput.value = resultado.toFixed(2);
}