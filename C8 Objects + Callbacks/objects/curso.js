var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
 //console.log(deportes)
 //console.log(persona)
 // ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//console.log(persona.edad);
//console.log(persona.estudios.esProgramador)
// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
//console.log(persona.nombre);
//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//console.log(autos);
//BORRAR
delete autos.marcas;
//console.log(autos);
//Objeto de funciones
var misfunciones = { 
    saludar: function() {console.log("hola")},
    despedir: function() {console.log("Adios")}
}
//misfunciones.saludar() //no funciona sin ()
//misfunciones.despedir()

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
//console.log(atuendos);

var comidas = {};
    
var ingresarTiposComidas = 
    function (tipoComida1, tipoComida2) {
        comidas.tipoComida1 = ['Frutas','Verduras']; //sin corchetas no midifica el nombre de la propiedad
        comidas[tipoComida2] = ['hamburguesa','papas'];//Con corchetas modifica el nombre de la propiedad. Entiende que la 2da variable es lo que va en los corchetes
    };
ingresarTiposComidas('Saludable','nosaludable')
//console.log(comidas)
/*
{
    tipoComida1: [ 'Frutas', 'Verduras' ],
    nosaludable: [ 'hamburguesa', 'papas' ]
}
*/
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('año');

//console.log(tienePropiedad);
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

/*console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises:195, oceanos:5}
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }*/
 //THIS
 var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function () {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

// mascota.info();
function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 //console.log(resultado);

 var devolverFrase = function (comida) {
    return "Por favor me sirve " + comida
 }

 var noQuiero = function(comida) {
   return "No gracias, no deseo " + comida
 }
 var hablar = function (comida, deseo) {
    return deseo(comida)
 }

 var fraseFinal = hablar("fresas",devolverFrase)
 console.log(fraseFinal)
 fraseFinal = hablar("fresas",noQuiero)
 console.log(fraseFinal)
