alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")

let selProductos = Number(prompt( "Productos:\n1-Remera negra $1500\n2-Remera blanca $1300\n3-jean celeste $5000\n4-Zapatillas negra $12000\nElija con el numero segun el producto"))
let selCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}

function venta(){
  while (selProductos != 0) {
    switch (selProductos) {
      case 1:
        selCantidad= Number(prompt("producto seleccionado es Remera negra, indique la cantidad."))
        total += cantidad(selCantidad, 3000)
        break;
        case 2:
        selCantidad = Number(prompt("producto seleccionado es Remera begra, indique la cantidad."))
        total += cantidad(selCantidad, 1500)
        break;
      case 3:
        selCantidad = Number(prompt("producto seleccionado es jean celeste, indique la cantidad."))
        total += cantidad(selCantidad, 5000)
      break;
      case 4:
        selCantidad = Number(prompt("producto seleccionado es zapatilla negra, indique la cantidad."))
        total += cantidad(selCantidad, 6000)
        break;

      default:
        break;
    }
    selProductos = Number(prompt( "1-Remera negra $1500\n 2-Remera blanca $1300\n 3-jean celeste $5000\n 4-Zapatillas negra $12000\n. Recuerde que para salir presione 0"))
  }
  alert("el total de la compra es de: " + total)
}

venta()
let nombre;
nombre = prompt("cual es su nombre?")
alert("gracias por su compra " + nombre)