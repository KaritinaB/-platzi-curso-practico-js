
/*console.log({
    precioOriginal,
    descuento, 
    porcentajePrecioConDescuento,
    precioConDescuento
}); */
function calcularPrecioConDecuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;

} 

function BotonDeDscuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputcupon = document.getElementById("InputCupon");
    const cuponValue = inputcupon.value;

    let descuento;

    switch(cuponValue){
        case "Ropa de señora":
            descuento = 16;
            break;

        case "Ropa de millenial":
            descuento = 20;
            break;
        case "Ropa de hipster":
            descuento = 12;
            break;
    }

    const precioConDescuento = calcularPrecioConDecuento(priceValue, discountValue);

    const precioFinal = document.getElementById("PrecioFinal");    
    precioFinal.innerText = "El precio con descuento, son: $" + precioConDescuento;

}

const cupones =[
    "Ropa de señora",
    "Ropa de millenial",
    "Ropa de hipster"
];