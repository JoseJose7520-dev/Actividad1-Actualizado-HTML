function calcular() {
    let numerosInput = document.getElementById("numeros");
    let mayorInput = document.getElementById("mayor");
    let menorInput = document.getElementById("menor");
    let promedioInput = document.getElementById("promedio");

    let texto = numerosInput.value.trim();

    if (texto === "") {
        alert("please, ingresa al menos un num.");
        mayorInput.value = "";
        menorInput.value = "";
        promedioInput.value = "";
        return;
    }


    let partes = texto.split(",");

  
    partes = partes.map(function (valor) {
        return valor.trim();
    });

   
    let sonValidos = partes.every(function (valor) {
        return valor !== "" && !isNaN(valor);
    });

    if (!sonValidos) {
        alert("Ingresa solo números válidos separados por comas.");
        mayorInput.value = "";
        menorInput.value = "";
        promedioInput.value = "";
        return;
    }

    let numeros = partes.map(Number);

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

   
    let suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    let promedio = suma / numeros.length;

    // Mostrar los resultados en las cajas de texto bloqueadas
    mayorInput.value = mayor;
    menorInput.value = menor;
    promedioInput.value = promedio.toFixed(2);
}