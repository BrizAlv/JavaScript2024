//partes de un objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        ciudad: 'Buenos Aires',
        pais: 'Argentina'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
};

console.log(persona.saludar());

//constructor o función constructora: es de utilidad para la creación de multiples objetos con mismos atributos
// requiere de una instancia 
///-------------------clases--------------------------------
//constructor
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//instancia: es la creación de un objeto a partir de un constructor, contiene los valores de los atributos en el mismo orden del constructor 
const persona1 = new Persona('Juan', 'Perez', 30);
console.log(persona1);  

const persona2 = new Persona('Ana', 'Juarez', 42);
console.log(persona2);

Persona.prototype.telefono = "555-555-555";
persona1.nacionalidad= "mexicano";
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
}
persona1.saludar();
persona2.saludar();

//Prototipos y herencia

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log('Sonido de animal');
    }
    saludar(){
        console.log(`Hola, soy un ${this.tipo} y mi nombre es ${this.nombre}`);
    }
}

class Perro extends Animal {constructor(nombre, tipo, raza) {
    super(nombre,  tipo,);
    this.raza = raza;
}
emitirSonido() {
    console.log('Y alza alegremente un: "Wuof, Wuof!!...');
}
correr() {
    console.log(`${this.nombre}, el ${this.tipo},está corriendo`);
}
}

const perro1 = new Perro('Javito', 'Perro', 'Perro', );
console.log(perro1);
perro1.correr();
perro1.emitirSonido();