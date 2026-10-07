export default class OperacionesAritmeticas {
    // Máximo común divisor (algoritmo de Euclides)
    mcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    // Mínimo común múltiplo
    mcm(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
            throw new Error("Los números deben ser enteros positivos");
        }
        return (a * b) / this.mcd(a, b);
    }
}