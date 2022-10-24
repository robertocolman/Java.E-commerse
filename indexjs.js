function saludo() {
  let nombre = prompt("Cuál es su nombre? ");
  if (nombre == "") {
    alert("No ah ingresado su nombre. Igual manera dejamos acceder a la página");
  } else {
    alert("Bienvenido al e-commerce " + nombre);
  }
}

saludo();

alert("Ingrese la opcion del producto que desea llevar\npara salir ingrese 0");
let selProductos;
selProductos = Number(prompt("Productos:\n1-Remera negra $1500\n2-Remera blanca $1300\n3-jean celeste $5000\n4-Zapatillas negra $12000\nElija con el numero segun el producto"));
let selCantidad;
let total = 0;

const cantidad = (cant, precio) => {
  return cant * precio;
};

function venta(){
  while (selProductos != 0) {
    switch (selProductos) {
      case 1:
        selCantidad = Number(prompt("producto seleccionado es Remera negra\nindique la cantidad del producto que va a comprar:"));
        total += cantidad(selCantidad, 3000);
        break;
      case 2:
        selCantidad = Number(prompt("producto seleccionado es Remera begra\nindique la cantidad del producto que va a comprar:"));
        total += cantidad(selCantidad, 1500);
        break;
      case 3:
        selCantidad = Number(prompt("producto seleccionado es jean celeste\nindique la cantidad del producto que va a comprar:"));
        total += cantidad(selCantidad, 5000);
        break;
      case 4:
        selCantidad = Number(prompt("producto seleccionado es zapatilla negra\nindique la cantidad del producto que va a comprar:"));
        total += cantidad(selCantidad, 6000);
        break;

      default:
        break;
    }
    selProductos = Number(prompt("1-Remera negra $1500\n 2-Remera blanca $1300\n 3-jean celeste $5000\n 4-Zapatillas negra $12000\nRecuerde que para salir presione 0"));
  }
  alert("el total de la compra es de: " + total + "\nMuchas gracias por su compra");
}

venta();
