//La función recibe como argumento una lista de números positivos


//Devuelve otra lista con los números que están repetidos


function repetidos(lista){


    //Ordeno la lista (son números por eso lafunción callback)


    let ordenada = lista.sort(function(a, b){return a - b});


    let repes=[];


    let item = 0;


    let existe;


    //Recorro la lista


    while (item < ordenada.length){


      existe = false;


      //Si un elemento es igual al siguiente avanzo el índice


      //continuo incremetando el indice hasta encontar un


      //elemento diferente


      existe = ordenada[item] == ordenada[++item];


      //si un bloque vacío, no hay que hacer nada.


      while (ordenada[item] == ordenada[++item] && existe){ }


      //Hay un elemento repetido: anotar en  lista de repetidos


      if (existe){


        repes.push(ordenada[item-1])


      }


    }


    return repes;

  }  