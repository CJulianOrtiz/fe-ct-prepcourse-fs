// EXPRESIÓN DE CLASE
//class AutoExp {
//    constructor(puertas, color, marca, año, ruedas) {
//       this.puertas = puertas;
//       this.color = color;
//       this.marca = marca;
//       this.año = año;
//       this.ruedas = ruedas;
//    }
// }
// var miSegundoAuto = new AutoExp(4, 'Blanco', 'Fiat', 2015, 4);
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);

 // FUNCIÓN CONSTRUCTORA
function AutoConst(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.info = () => {
        console.log("mi auto es " + this.color + " de marca " + this.marca);
    }
 }
 var miPrimerAuto = new AutoConst(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 miPrimerAuto.info();
