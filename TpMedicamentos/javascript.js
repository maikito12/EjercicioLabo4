class Medicamento
{
   
    constructor(id,nombre,precio,stock)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

     mostrarDetalleMedicamento()
{
    console.log("Informacion de medicamento: nombre : " , this.nombre, " precio: ",  this.precio, " stock:" ,this.stock)
}
}

class Inventario{
        
    Medicamentos=[]

    agregarMedicamento(Medicamento)
    {
        this.Medicamentos.push(Medicamento)
    }

    mostrarInventario()
    {
        console.log(this.Medicamentos)
    }
    
    buscarMedicamento(id)
    {
        let encontrado=null
        this.Medicamentos.forEach(i=>
        {
            if(i.id===id)
            {
                encontrado=i
            }
        }
        )
        return encontrado
    }

    actualizarStock(id, nuevoStock)
    {
        let encontrado=this.buscarMedicamento(id)
        encontrado.stock=nuevoStock
        
    }
       
}

class Venta{
    id=0
    
    registrarventa(medicamento, cantidad)
    {
       let encontrado=inventario.buscarMedicamento(medicamento.id)
       if(encontrado.stock<cantidad)
       {
        return null
       }
       else
       {
         this.id++
        encontrado.stock=encontrado.stock-cantidad
        let total=encontrado.precio*cantidad
        return total

       }
        
       
    }
    getVentas()
    {
        return this.id
    }
}

const  reportes=()=>
{
    console.log("INVENTARIO")
    inventario.mostrarInventario()
    inventario.Medicamentos.forEach(i=>
    {
        if(i.stock<5)
        {
            console.log(i.nombre ,  " se encuentra bajo de stock")
        }
    }
    )
    let ventasTotales=venta.getVentas()
    console.log("Ventas:",ventasTotales)

}


let clona=new Medicamento(1, "Clona", 550, 6)
let ibuprofeno=new Medicamento(3, "ibuprofeno", 300, 3)
let paracetamol=new Medicamento(2, "paracetamol", 1500, 4)
const inventario=new Inventario()
inventario.agregarMedicamento(clona)
inventario.agregarMedicamento(ibuprofeno)
inventario.agregarMedicamento(paracetamol)
let venta=new Venta()
venta.registrarventa(clona, 2)
venta.registrarventa(paracetamol, 2)

reportes()

