// Hola profesor, me llamo Diego. Aquí está el código para ver la serie del factorial:

function visualizarSerieFactorial(n) {
  if (n < 0) return "No existe factorial para números negativos";
  if (n === 0 || n === 1) return `${n}! = 1`;

  let resultado = 1;
  let serie = [];

  // Vamos guardando cada número en un arreglo y multiplicando
  for (let i = n; i >= 1; i--) {
    serie.push(i);
    resultado *= i;
  }

  // Unimos los números con un ' x ' para mostrar la serie completa
  return `${n}! = ${serie.join(' x ')} = ${resultado}`;
}

// Ejemplo de uso
console.log(visualizarSerieFactorial(5));
// Resultado en consola: 5! = 5 x 4 x 3 x 2 x 1 = 120