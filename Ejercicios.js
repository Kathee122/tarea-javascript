// Ejercicio 1
function sumaElementosPares(array) {
    let suma = 0;
    for (let numero of array) {
      if (numero % 2 === 0) {
        suma += numero;
      }
    }
    return suma;
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const respuesta = sumaElementosPares(numeros);
  console.log(respuesta);

  //Ejercicio 2

  //Ejercicio 3
  function encontrarElementoMaximo(array) {
    if (array.length === 0) {
      return undefined; 
    }
    let maximo = array[0];
  
    for (let elemento = 1; elemento < array.length; elemento++) {
      if (array[elemento] > maximo) {
        maximo = array[elemento];
      }
    }
    return maximo;
  }
  
  const Array = [10, 5, 8, 15, 3, 20];
  const max = encontrarElementoMaximo(Array);
  
  console.log("Elemento máximo:", max);


  //Ejercicio 4
  function multiplicarNumero(array, multiplicador) {
    const nuevoArray = [];
  
    for (let numero = 0; numero < array.length; numero++) {
      nuevoArray.push(array[numero] * multiplicador);
    }
  
    return nuevoArray;
  }

  const array = [1, 0, 3, 4, 5];
  const multiplicador = -1;
  const nuevoArray = multiplicarNumero(array, multiplicador);
  
  console.log("Nuevo array multiplicado:", nuevoArray);

  //Ejercicio 5
  function eliminarDuplicados(arr, numero) {

    for (let i = 0; i < arr.length; i++) {
      console.log(i + "#");
      for (let j = i + 1; j < arr.length; j++) {
        console.log(j);
        // Compara si hay duplicados
        if (arr[i] === arr[j]) {
          // Elimina el elemento duplicado
          arr.splice(j, 1);
          // Decrementa j para evitar omitir el próximo elemento
          j--;
        }
      }
    }
    return arr;
  }
  
  const arrayConDuplicados = [1, 2, 3, 4, 2, 5, 6, 1];
  const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);
  console.log(arraySinDuplicados);

  //Ejercicio 6
  
  function ContarOcurrencia(array,numero) {
    let contarOcurrencia = 0;
    for (let posicion = 0; posicion < array.length; posicion++) {
      if(numero === array[posicion]){
        contarOcurrencia++;
      }

    }
    return "El numero " +numero + " se repite " + contarOcurrencia+" veces";

  }

  console.log(ContarOcurrencia([1, 2, 3, 4, 2, 5, 6, 1], 1));

//otra forma de hacer el ejercicio numero 6
function contarOcurrenciaAll(array) {
    
  for (let i = 0; i < array.length; i++) {
      let contador = 0;
    for (let j = i + 1; j < array.length; j++) {
      // Compara si se repite
      if (array[i] === array[j]) {
        contador++;
      }
    }
    if (contador > 0) {
      console.log("El número " + array[i] + " se repite " + (contador + 1) + " veces");
    }
  }
}

contarOcurrenciaAll([1, 2, 3, 4, 2, 5, 6, 1]);

//Ejercicio 7
function FiltrarPalabras(array, longitud){
  let nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i].length === longitud){
      nuevoArreglo.push(array[i])
    }

    }
    return nuevoArreglo;
}

console.log(FiltrarPalabras(["Hola","manzana","perro","gatos"],5));