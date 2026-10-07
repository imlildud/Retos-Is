export default class GeneradorPasswords {
    constructor() {
        this.caracteres = [
            ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            ["!", "@", "#", "$", "%", "&", "*", "?", "+", "=","-","/","%"]
        ];
    }

    intRandom(min, max) {
        let rnd = Math.random();
        return Math.floor(rnd * (max - min + 1)) + min;
    }

    generar(minLongitud = 8, maxLongitud = 15) {
        let largo = this.intRandom(minLongitud, maxLongitud);
        let pass = new Array(largo);
        pass.fill('');
        
        pass.forEach((v, i, p) => {
            let lista = this.caracteres[this.intRandom(0, this.caracteres.length - 1)]; 
            let indice = this.intRandom(0, lista.length - 1);
            p[i] = lista[indice]; 
        });
        
        return pass.join('');
    }
}