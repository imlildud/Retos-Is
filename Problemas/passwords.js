function intRandom(min, max){
    let rnd = Math.random();
    return Math.floor(rnd*(max -  min + 1))  + min;
}
  
  const caracteres =[
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["!", "@", "#", "$", "%", "&", "*", "?", "+", "=","-","/","%"]
  ];
  
  //Longitud de la password generada (pass)
  let largo = intRandom(8,15);
  let pass = new Array(largo);
  pass.fill('');
  //Recorrer el array vacío para llenarlo con caracteres sacados al azar de cada lista 
  pass.forEach((v,i,p)=>{
    let lista = caracteres[intRandom(0, caracteres.length-1)]; 
    let indice = intRandom(0, lista.length-1);
    p[i] = lista[indice]; 
  })
  
  //Convertir el array con los caracteres en una string.
  let password = pass.join('');
  console.log(password);