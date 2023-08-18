function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    nuevoArray = [];
    var x = 0;
    arrayOfStrings.forEach((element) => {
        if (element[0] == "a") {
            nuevoArray[x] = element;
            console.log (element);
            x++;
        }});
    return nuevoArray;
}

array = ["papas","acelga","bananas","anana","zanahoria","zapallo","anis"];
console.log (filter(array));
