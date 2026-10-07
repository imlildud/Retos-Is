export default class ExtractorElementos {
    obtenerRepetidos(lista) {
        let ordenada = lista.sort(function(a, b){ return a - b; });
        let repes = [];
        let item = 0;
        let existe;

        while (item < ordenada.length) {
            existe = false;
            existe = ordenada[item] == ordenada[++item];
            
            while (ordenada[item] == ordenada[++item] && existe) { }
            
            if (existe) {
                repes.push(ordenada[item - 1]);
            }
        }
        return repes;
    }
}