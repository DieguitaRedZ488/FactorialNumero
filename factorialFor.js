// Función factorial con ciclo for
function factorialIterativo(n) {
    if (n < 0) {
        return "No existe factorial para números negativos";
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso
console.log(factorialIterativo(5)); // Resultado: 120

