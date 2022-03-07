class Micompra {
  constructor(id, nombre, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
  }
}

const elegidos = [];
    elegidos.push(   new Micompra(1, "Bulgaria", "https://dummyimage.com/300x300/566573/fff", 2500));
    elegidos.push(  new Micompra(2, "Roma", "https://dummyimage.com/300x300/566573/fff", 1500));
    elegidos.push(  new Micompra(3, "Madrid", "https://dummyimage.com/300x300/566573/fff", 2000));
    elegidos.push(  new Micompra(4, "promo", "https://dummyimage.com/300x300/566573/fff", 2000));
    elegidos.push(  new Micompra(5, "Roma", "https://dummyimage.com/300x300/566573/fff", 2500));
    elegidos.push(  new Micompra(6,"Marruecos","https://dummyimage.com/300x300/566573/fff", 1500 ));
    elegidos.push(  new Micompra(7, "Suecia", "https://dummyimage.com/300x300/566573/fff", 2000));
    elegidos.push(  new Micompra(8, "Venecia", "https://dummyimage.com/300x300/566573/fff", 2500));
    elegidos.push(  new Micompra( 9,"Montpellier", "https://dummyimage.com/300x300/566573/fff", 7500 ));
    elegidos.push(  new Micompra(10, "Lyon", "https://dummyimage.com/300x300/566573/fff", 20500));
    elegidos.push(  new Micompra(11,"Paris", "https://dummyimage.com/300x300/566573/fff", 11500));


//FUNCION SUMA suma el total de precios de los productos seleccionados
const sumaBruta = elegidos.reduce((acc, el) => acc + el.precio, 0);
console.log(`La suma inicial de precios es ${sumaBruta}`);

//FUNCION PROMO1 si compro mas de 10 prendas se descuenta  el producto mas barato de los elegidos
let promo1 = 0;
if (elegidos.length >= 10) {
  const menor = elegidos.map((el) => el.precio).sort((a, b) => a - b);
  promo1 = menor[0];
}
console.log(`El monto por Promo 1 (descuenta el valor de la prenda mas barata si compro mas de 10 items es: ${promo1}`);

//FUNCION PROMO2 si compro un producto de nombre "promo" agregar otro producto igual
let promo2 = 0;
const encontrar = elegidos.some((el) => el.nombre === "promo");
console.log(`Muestra si encontro un item con nombre promo ${encontrar}`);
if (encontrar == true) {
  elegidos.push(new Micompra(4, "promo", "https://dummyimage.com/300x300/566573/fff", 2000) );

  console.log("tamaño del array ahora = " + elegidos.length); //verificacion

  promo2 = elegidos[elegidos.length - 1].precio;
}
console.log(`El monto por Promo 2 a descontar (Si compra una prenda en promo se suma una igual y se descuenta su precio) ${promo2}`);

//VALOR TOTAL DE LA COMPRA
let compraTotal = sumaBruta - (promo1 + promo2)
console.log(`El valor total de la compra con los descuentos es $  ${compraTotal}`)


//FUNCION FORMA DE PAGO que reste 10% por pago efectivo que recargue 10% pago en 3 cuotas y 15% pago en 6 cuotas
let fPago = prompt("Ingrese su forma de pago \n1)Efectivo \n2)Tarjeta")
let totalNeto 
const efvo = x =>x-(x*0.10);
const tarj3 = x => x*1.10;
const tarj6 = x => x*1.15;
/* let costo = compraTotal */

function formaDePago(fPago, compraTotal) {
    if (fPago == 1) {
      totalNeto = efvo(compraTotal);//deberia hacer (100/1.10)*1.21 
       /*  alert("El monto total de su compra es: "+total) */
      
    }    
    /* si fPago no es 1 */
    else{

        let cuotas = parseInt(prompt("Indique la cantidad de cuotas en las que abonara 3 o 6"))
        switch (cuotas) {
            case 3:
              totalNeto =tarj3(compraTotal)//deberia hacer (100*1.1)*1.21
                return totalNeto;
                break;
            case 6:
              totalNeto = tarj6(compraTotal)//deberia hacer (100*1.15)*1.21 
                return totalNeto;
                break;
            default:
                return 0
                break;
            
        }
    }
}
formaDePago(fPago, compraTotal)
/* alert("El total de su compra es: "+total)  */

// TOTAL A PAGAR  muestra el total de la compra con los impuestos incluidos
let totalAPagar = (totalNeto*1.21).toFixed(2) /* totalNeto = total */
alert(`Gracias por su compra, usted abonara un total de $ ${totalAPagar}`)

/*/////////////////////////////////////////////////////////////////////
                      INTERACCION CON EL DOM
///////////////////////////////////////////////////////////////////*/
let tituloPpal = document.getElementById("tituloPpal")
tituloPpal.innerText = "HOLA ACA TE MOSTRAMOS EL DETALLE DE TU COMPRA"

let bloque = document.getElementById("bloque")
bloque.innerHTML = "<h2> Conoce nuestras promociones diarias </h2>"

let div = document.createElement("div")
div.innerHTML="<h2>Elegiste estas prendas </h2> "
document.body.append(div);

for (const compra of elegidos){
  let contenido = document.createElement("div");
  contenido.innerHTML =`<p> ID:  ${compra.id} </p> 
                        <p> nombre:  ${compra.nombre} </p>
                        <img src="${compra.imagen}" alt="">                      
                        <p> precio:  ${compra.precio} </p>`
  
 document.body.appendChild(contenido);
}
