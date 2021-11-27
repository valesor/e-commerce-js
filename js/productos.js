

// Creacion de objeto con 4 atributos y 1 método
class torta {
    constructor (id, sabor, tamaño, precio, cantidad) {
    this.id = parseInt(id);
    this.sabor= sabor.toUpperCase();
    this.tamaño= tamaño.toUpperCase();
    this.precio = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
 
}
saludo() {
    console.log('Hola usted eligio ' + this.sabor + '. Y el tamaño elegido es ' + this.tamaño + '.');
}
}

// Creación de las 8 tortas con sus atributos
const torta1 = new torta ("0", "torta fantasia", "grande","300","1");
const torta2 = new torta ("1", "torta arcoiris", "porcion", "350","1");
const torta3 = new torta ("2", "torta crujiente", "porcion", "300","1");
const torta4 = new torta ("3", "torta pink", "grande", "350","1");
const torta5 = new torta ("4", "torta suspiro", "grande","400","1");
const torta6 = new torta ("5", "torta crack", "porcion", "450","1");
const torta7 = new torta ("6","torta chocozoom", "porcion", "400","1");
const torta8 = new torta ("7","torta quesito", "grande", "450","1");

// creación de un array con todas las tortas que vaya seleccionando el usuario
const tortas = [];

// metemos todas las tortas en el array para poder trabajarlas todas juntas 
tortas.push(torta1, torta2, torta3, torta4, torta5, torta6, torta7, torta8);
