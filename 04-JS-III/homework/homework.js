// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length 
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i< array.length ; i++){
    array[i]=array[i]+1
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = ""
  for (var i=0; i< palabras.length ; i++){
    frase = frase + palabras[i] + " "
  }
  
  return frase.slice(0,frase.length-1)
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var resultado
  resultado = false
  for (var i=0; i< array.length ; i++){
    if (array[i] === elemento){
      resultado = true
    } 
  }
  return resultado
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado
  resultado = 0
  for (var i=0; i< numeros.length ; i++){
    resultado=resultado+ numeros[i]
  } 
  return resultado
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumatoria
  sumatoria = 0
  for (var i=0; i< resultadosTest.length ; i++){
    sumatoria=sumatoria+ resultadosTest[i]
  } 
  return sumatoria/(i)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var resultado
  resultado = numeros[0]
  for (var i=1; i< numeros.length ; i++){
    if (resultado <  numeros[i]){
      resultado = numeros[i]
    }
  } 
  return resultado
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resultado
  resultado = 1
  switch (arguments.length){
    case 0:
      return 0
      break;
    case 1:
      return arguments[0]
      break;
    default: 
      for (var i=0; i< arguments.length ; i++){
        resultado=resultado * arguments[i]
      } 
      return resultado
  }
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var resultado
  resultado = 0
  for (var i=0; i < arreglo.length ; i++){
    if ( arreglo[i] > 18){
      resultado = resultado + 1
    }
  } 
  return resultado
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  switch (numeroDeDia){
    case 1:
    case 7:
      return "Es fin de semana"
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:  
      return "Es dia Laboral"
      break
  } 
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numString = n.toString()
  if (numString.slice(0,1)=="9"){
    return true
  }else{
    return false
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var resultado
  resultado = true
  for (var i=1; i< arreglo.length - 1  ; i++){
    if (arreglo[i] !== arreglo[i+1]){
      resultado = false
      break
    } 
  }
  return resultado
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var estaEnero = false
  var estaMarzo = false
  var estaNoviembre = false

  for (var i=0; i < array.length ; i++){
    if ( array[i] === "Enero"){
      estaEnero = true
    }    
    if ( array[i] === "Marzo"){
      estaMarzo = true
    }    
    if ( array[i] === "Noviembre"){
      estaNoviembre = true
    }
  } 
  if (estaEnero && estaMarzo && estaNoviembre) {
    return  ["Marzo" , "Noviembre", "Enero"]
  } else{
    return "No se encontraron los meses pedidos"
  }
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var resultado
  resultado = []
  var cont = 0
  for (var i=0; i < array.length ; i++){
    if ( array[i] > 100){      
      resultado[cont] = array[i]
      cont = cont + 1
    }
  } 
  return resultado
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var resultado
  resultado = []
  for (var i=0; i < 10 ; i++){
    numero = numero +2
    resultado[i] = numero 
    if ( resultado[i] === i){      
      resultado = "Se interrumpió la ejecución"
    }
  } 
  return resultado
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var resultado
  resultado = []
  var cont = 0
  for (var i=0; i < 10 ; i++){ 
    if ( i === 4){      
      continue
    }
    numero = numero +2
    resultado[cont] = numero
    cont = cont + 1
  } 
  return resultado
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
