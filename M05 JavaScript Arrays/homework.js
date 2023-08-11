/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primerElemento = array[0];
   return primerElemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   ultimo = array.length-1;
   elemento = array[ultimo];
   return elemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var cantElementos = array.length;
   return cantElementos;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map ((num) => {
      return num+1;
   })
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var texto = "";
   texto = palabras.join(" ");
   return texto;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var incluyeElemento = array.includes(elemento);
    if (incluyeElemento) {
        rta = true;
        return rta;
    } else {
        rta = false;
        return rta;
    }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   suma = 0;
   for (i=0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums[i];
      }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   suma = 0;
   promedio = 0;
   for (i=0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i];
      }
   promedio = suma / (resultadosTest.length);
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   rta = Math.max(...arrayOfNums);
   return rta;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   multi = 1;
   switch (arguments.length) {
      case 0:
         multi = 0;
         break;
      case 1:
         multi = arguments[0];
         break;
      default:
         for (i=0;i<arguments.length;i++) {
            multi = multi * (arguments[i]);
         }
   }
   return multi;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   rta = 0;
   array.forEach(element => {
      if (element > 18) {
         rta = rta + 1;
      }
   });
   return rta;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
        rta = "Es fin de semana";
        return rta;
        break;
      case 7:
        rta = "Es fin de semana";
        return rta;
        break;
      default:
        rta = "Es dia laboral";
        return rta;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   str1 = num.toString();
   array1 = str1.split("");
   if (array1[0]==="9") {
       rta = true;
       return rta;
   } else {
      rta = false;
      return rta;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   numx = array[0];
   var cumpleCondicion = array.every((num)=>{return num == numx});
   return cumpleCondicion;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   ene = false;
   mar = false;
   nov = false;
   rta = false;
   var array1 = [];
   rta1 = "No se encontraron los meses pedidos";
   array.forEach(element => {
      switch (element) {
         case "Enero":
            array1.push("Enero");
            ene = true;
            break;
         case "Marzo":
            array1.push("Marzo");
            mar = true;
            break;
         case "Noviembre":
            array1.push("Noviembre");
            nov = true;
            break;
         default:
           rta = false;
      }
   });
   if ((rta==false)&&((ene==false)||(mar==false)||(nov==false))) {
       return rta1;
   } else {
       return array1;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arrayTablaDelSies=[0];
   for (i=1; i < 11; i++) {
      rta = 6*i;      
      arrayTablaDelSies.push(rta);
   }
   return arrayTablaDelSies;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arrayResultado = [];
   array.forEach(element => {
      if (element > 100) {
         arrayResultado.push(element);
      }
   });
   return arrayResultado;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arrayResultado=[];
   rta = false;
   for (i=0; i<10; i++) {
      if (num==i) {
         rta = true;
         break;
      } else {
         num = num+2;
         arrayResultado.push(num);
      }
   }
   if (rta==true) {
      mensaje = "Se interrumpió la ejecución";
      return mensaje;
   } else {
      return arrayResultado;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrayResultado=[];
   for (i=0; i<10; i++) {
      if (i==5) {
         continue;
      } else {
         num = num+2;
         arrayResultado.push(num);
      }
   }
   return arrayResultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
