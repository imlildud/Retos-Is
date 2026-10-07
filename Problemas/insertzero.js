export default class ProcesadorArreglos {
    insertarCeros(numeros) {
        const resultado = [];

        for (const numero of numeros) {
            resultado.push(numero);

            if (numero % 2 === 0) {
                resultado.push(0);
            }
        }

        return resultado;
    }
}