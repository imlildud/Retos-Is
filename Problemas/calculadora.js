function calcular(a, b, sig) {
  let resultado;

  if (isNaN(a) || isNaN(b)) {
    resultado = null;
  } else if (sig === '+') {
    resultado = a + b;
  } else if (sig === '-') {
    resultado = a - b;
  } else if (sig === '*') {
    resultado = a * b;
  } else if (sig === '/') {
    if (b !== 0) {
      resultado = a / b;
    } else {
      resultado = null;
    }
  } else if (sig === '%') {
    if (b !== 0) {
      resultado = a % b;
    } else {
      resultado = null;
    }
  } else {
    resultado = null;
  }

  return resultado;
}