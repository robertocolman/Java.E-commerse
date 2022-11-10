class producto {
    constructor(id, nombre, gramo, precio){
        this.id = id;
        this.nombre = nombre;
        this.gramo = gramo;
        this.precio = precio;
    }
}

const producto1 = new producto(001, "cafe comun", "140gr", 1400)
const producto2 = new producto(002, "cafe suave", "170gr", 1700)
const producto3 = new producto(003, "capuccino", "120gr", 1900)
const producto4 = new producto(004, "cafe fuerte", "100gr", 1300)

const productoCafe = [producto1, producto2, producto3, producto4]

let carritoDeCompra = [];

let seleccion = prompt("Hola, desea comprar caffe? (si/no)")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("desea comprar caffe?")
}

if (seleccion == "si"){
    alert("estos son los productos que tenemos en stock")
    let todosLosProductos = productoCafe.map((productoCafe) => productoCafe.nombre + " " + productoCafe.gramo + " " + "$ " + productoCafe.precio + "\n")
    alert(todosLosProductos);
} else if (seleccion == "no"){
    alert("gracias por venir")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto al carrito:\ncafe comun\ncafe suave\ncapuccino\ncafe fuerte")
    let precio = 0

    if(producto == "cafe comun" || producto == "cafe suave" || producto == "capuccino" || producto == "cafe fuerte"){
        switch(producto){
            case "cafe comun":
                precio = 1400;
                break;
            case "cafe suave":
                precio = 1700;
                break;
            case "capuccino":
                precio = 1900;
                break;
            case "cafe fuerte":
                precio = 1300;
                break;                                 
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
        carritoDeCompra.push({producto, unidades, precio})
        console.log(carritoDeCompra)
    } else {
        alert("no tenemos ese producto en stock")
    }
    seleccion = prompt("desea seguir agregando productos al carrito?(si/no)")
    while(seleccion === "no"){
        alert("gracias por la compra, el total de su compra se mostrará por consola")
        carritoDeCompra.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carritoDeCompra.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)