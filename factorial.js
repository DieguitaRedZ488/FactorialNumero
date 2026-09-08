// Función factorial recursiva
function factorial(n) {
  if (n < 0) {
    return "No existe factorial para números negativos";
  }
  if (n === 0 || n === 1) {
    return 1; // Caso base
  }
  return n * factorial(n - 1); // Llamada recursiva
}

// Ejemplo de uso
console.log(factorial(5)); // Resultado: 120


//ola profesor me llamo diego 
