export default class Calculadora {
    calcular(a, b, signo) {
        let resultado;

        if (isNaN(a) || isNaN(b)) {
            resultado = null;
        } else if (signo === '+') {
            resultado = a + b;
        } else if (signo === '-') {
            resultado = a - b;
        } else if (signo === '*') {
            resultado = a * b;
        } else if (signo === '/') {
            if (b !== 0) {
                resultado = a / b;
            } else {
                resultado = null;
            }
        } else if (signo === '%') {
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
}