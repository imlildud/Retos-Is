// Máximo común divisor (algoritmo de Euclides)
function mcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// Mínimo común múltiplo
function mcm(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
    throw new Error("Los números deben ser enteros positivos");
  }
  return (a * b) / mcd(a, b);
}

console.log(mcm(6, 4)); // 12
console.log(mcm(21, 6)); // 42

module.exports = { mcm, mcd };