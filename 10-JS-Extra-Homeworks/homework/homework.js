// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = []
  var cont = 0 
  for (const propiedad in objeto) {
    matriz[cont] = [propiedad,objeto[propiedad]]
    cont = cont + 1
  }
  console.log(matriz)
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objLetras = {}
  for (i = 0 ; i < string.length ; i++) {
    if ( objLetras[string[i]] && true){
      ++objLetras[string[i]]
    }else{
      objLetras[string[i]] = 1
    }
  }
  return objLetras
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = ""
  var minus = ""
  for (i = 0 ; i < s.length ; i++) {
    if ( s[i].toUpperCase() === s[i] ){
      mayus = mayus + s[i]
    }else{
      minus = minus + s[i]
    }
  }
  return mayus+minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras = []
  var cont = 0
  palabras[0]=""
  var fraseEspejada = ""
  for (i = 0 ; i < str.length ; i++) {
    if ( str[i] !== " " ){
      palabras[cont] = palabras[cont] + str[i]
    }else{
      ++cont
      palabras[cont]=" "
      ++cont
      palabras[cont]=""
    }
  }
  for (i = 0 ; i < palabras.length ; i++) {
    for (j = 0 ; j < palabras[i].length ; j++) {
      fraseEspejada = fraseEspejada + palabras[i][palabras[i].length - 1 - j]
    }
  }  
  return fraseEspejada
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numStr = numero.toString()
  var numEspejado = ""
  for (j = 0 ; j < numStr.length ; j++) {
    numEspejado = numEspejado + numStr[numStr.length - 1 - j]
  }
  if (numStr === numEspejado) {
    return "Es capicua"
  } else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevaCadena = ""
  for (i = 0 ; i < cadena.length ; i++) {
    if ( cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c" ){
      nuevaCadena = nuevaCadena + cadena[i]
    }
  }
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nArray =[]
  var nArray2 =[]
  var aux = 0
  //Generar un ínice en la posición 2 (En 0 está la posición original, y en 1 el string)
  for (i = 0 ; i < arr.length ; i++) {
    nArray[i] = [i , arr[i] , arr[i].length ]
  }  
  for (i = 0; i< nArray.length-1 ; i++){
    for (j = i+1 ; j < nArray.length ; j++){
      if(nArray[i][2] > nArray[j][2]){
       aux = nArray[i];
       nArray[i] = nArray[j];
       nArray[j] = aux;
      }
    }
  }  
  for (i = 0; i< nArray.length ; i++){
    nArray2[i] = nArray[i][1]
  }
  console.log(nArray2)
  return nArray2
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var cont = 0 
  var objMatch = {}
  var auxProp = ""
  var newArray = []
  for (i = 0; i< arreglo1.length ; i++){
    for (j = 0 ; j < arreglo2.length ; j++){
      if(arreglo1[i] === arreglo2[j] ){
        auxProp = arreglo1[i].toString()
        objMatch[auxProp] = arreglo1[i]
      }
    }
  } 
  for (const propiedad in objMatch){
    newArray[cont] = objMatch[propiedad]
    ++cont
  }
  console.log(newArray)
  return newArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

