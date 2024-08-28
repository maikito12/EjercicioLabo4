//15
let numeros= [1,2,3,4,5]

function arrayDuplicado (numeros)
{
    return arrayDuplicado=[...numeros,...numeros];
}

const duplicado=arrayDuplicado(numeros)

console.log(duplicado)
//16
let nombre="trolitos"
function cadenaInvertida (numeros)
{
   return numeros.reverse().join('');

}

let probando= cadenaInvertida(numeros)
console.log(probando)

//17
let palabras=["maico", "matias", "gian LUKA"]

const FiltrarPorLongitud= (palabras, longitud) =>
{
    const NuevoArray=[]
   for(let i=0; i<palabras.length; i++)
   {

    if(palabras[i].length>longitud)
        {
        NuevoArray.push(palabras[i])
        }
        
   }
           
  
    return NuevoArray
}

const NuevoArray=FiltrarPorLongitud(palabras, 5)
console.log(NuevoArray)

//18

function Estudiante(nombre, edad, direccion, promedio)
{
    this.nombre=nombre
    this.edad=edad
    this.direccion=direccion
    this.promedio=promedio
   this.saludar=function()
    {
        console.log("hola", this.nombre)
    }
    
}

let estudiantes=[new Estudiante("maico", 19, "A la loma del orto antes", 8.22),new Estudiante("matias", 29, "por alla", 7.5) ]
estudiantes.forEach(estudiante=> {
    estudiante.saludar()
})

//19

const Buscar= function(estudiantes, nombre)
{
    let encontrado="no existe"
    estudiantes.forEach(estudiante =>
    {
        if(estudiante.nombre===nombre)
        {
           encontrado=estudiante
        }
       
    }
    )
    return encontrado
}

 let estudianteBuscado=Buscar(estudiantes, "matias")
 console.log(estudianteBuscado)

//El uso de prototype esta definido excepcionalmente para un objeto, no se puede utilizar para colecciones de objetos
Estudiante.prototype.devolverNota=function(estudiante)
{
    return estudiante.promedio
}

let notaMaico=estudiantes[0].devolverNota(estudiantes[0])
console.log(notaMaico)

//20

const PromedioClase= function(estudiantes)
{
    let sumaTolal=0
    
    estudiantes.forEach(estudiante =>
        {

            
              sumaTolal+=estudiante.promedio
           
           
        }
        )
        return sumaTolal/estudiantes.length
}

const PromEstudiantes=PromedioClase(estudiantes)
console.log(PromEstudiantes)

//21 y 22


function Coche(marca, modelo, anio)
{
    this.marca=marca
    this.modelo=modelo
    this.anio=anio
    this.arrancar= ()=> console.log("Estoy arrancando mi ", this.modelo) 
    this.detener= ()=> console.log("Estoy deteniendome") 
}

let corollita=new Coche("toiora", "couroula", 2013)
corollita.arrancar()

//23
function Carrito() {
    this.productos = [];
    this.agregarProducto = function(producto) {
        this.productos.push(producto);
    };
    this.mostrarProductos = function() {
        console.log(this.productos);
    };
}

let miCarrito = new Carrito();
miCarrito.agregarProducto({ nombre: "Manzana", precio: 1.2 });
miCarrito.agregarProducto({ nombre: "Leche", precio: 0.8 });
miCarrito.mostrarProductos();

///24
let arrayEjer24 = [2, 3 , 10, 1 , 0 , 8];

function ordenarNumeros(array) {
    return array.slice().sort((a, b) => a - b);
}

// Ejemplo de us
let numerosOrdenados = ordenarNumeros(arrayEjer24);

console.log(numerosOrdenados); // [1, 2, 3, 5, 8]

///25
let estudiante1 = new Estudiante ("Marcos", 19, 8.5);
let estudiante2 = new Estudiante ("Inaki", 19, 8);

let arregloEstudiante = [estudiante1, estudiante2];

function buscarYEliminar (arreglo, dato)
{
    for (let i=0; i<arreglo.length; i++)
    {
        if (arreglo[i].nombre === dato)
        {
            arreglo.splice(i, 1); // Elimina el elemento en la posición 'i'
            i--;
        }
    }

    return arreglo;
}

let arreglo25 = buscarYEliminar (arregloEstudiante, "Marcos")
console.log(arreglo25)

///26 
class Producto
{
    constructor (nombre, precio, stock)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let producto1 = new Producto ("Plato", 200, 10);
let producto2 = new Producto ("Vaso", 500, 5);
let arrayCarrito = [producto1, producto2];

function sumarPrecio (arregloProducto)
{
    let suma=0
    for (let i=0; i<arregloProducto.length; i++)
    {
        suma += arregloProducto[i].precio * arregloProducto[i].stock
    }
    return suma;
}

let suma26 = sumarPrecio(arrayCarrito);

console.log("Precio" + suma26);

///28
class CuentaBancaria
{
    constructor (nombre, apellido, dni, saldo)
    {
        this.nombre = nombre;
        this.apellido = apellido
        this.dni = dni;
        this.saldo = saldo
    }

    set setSaldo (plata)
    {
        this.saldo = plata;
    } 

    get getsaldo ()
    {
        return this.saldo;
    } 


    depositar (plata)
    {
        let saldoNuevo = this.saldo + plata;
        this.saldo = saldoNuevo;
    }

    retirar (plata)
    {

        if (this.saldo > plata)
        {
            let saldoNuevo = this.saldo - plata;
            this.saldo = saldoNuevo;
        } else
        {
            console.log("error")
        }
        
    }

    mostrarSaldo ()
    {
        console.log(this.saldo) 
    }
}

let cuenta = new CuentaBancaria ("Marcos", "La gorda closter", 19, 3);

cuenta.depositar(10);
cuenta.retirar(3)
cuenta.mostrarSaldo();

class Libro {
    constructor (titulo, autor, paginas)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    mostrarDetalles()
    {
        console.log(libro)
    }
}

let libro = new Libro ("Harry Potter", "Marcos", 230);
libro.mostrarDetalles();



