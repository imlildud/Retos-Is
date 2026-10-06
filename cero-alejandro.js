function insertarCeros(numeros) {
    const resultado = [];

    for (const numero of numeros) {
        resultado.push(numero);

        if (numero % 2 === 0) {
            resultado.push(0);
        }
    }

    return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6];

console.log(insertarCeros(numeros));