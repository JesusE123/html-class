const arreglo = [{
    category: "sweet",
    name: "alfajor",
    price: 5,
    moneda: "$",
    img: "https://romeojeremiah.github.io/Project_Grocery_Cart/img/sweets-1.jpeg"
},{
    category: "cupcake",
    name: "cupcake",
    price: 5,
    moneda: "$",
    img: "https://romeojeremiah.github.io/Project_Grocery_Cart/img/cupcake-1.jpeg"
},{
    category:"cake",
    name: "pastel",
    price: 5,
    moneda: "$",
    img: "https://romeojeremiah.github.io/Project_Grocery_Cart/img/cake-1.jpeg"
},{
    category:"dougnhuts",
    name: "dona",
    price: 5,
    moneda: "$",
    img: "https://romeojeremiah.github.io/Project_Grocery_Cart/img/doughnut-1.jpeg"
},{
    category:"sweet",
    name: "gomitas",
    price: 10,
    moneda: "$",
    img: "https://romeojeremiah.github.io/Project_Grocery_Cart/img/sweets-2.jpeg"
},{
    category:"cupcake",
    name: "cupcake",
    price: 10,
    moneda: "$",
    img: "https://romeojeremiah.github.io/Project_Grocery_Cart/img/cupcake-2.jpeg"
}];

const carrito = [];

function agregar(elemento){
const contenedor = document.createElement("div");
const background = document.createElement("div");
const row = document.createElement("div");
const item = document.createElement("span");
const precio = document.createElement("span");
const divitem = document.createElement("div");
const divprecio = document.createElement("div");
const img = document.createElement("img");
const divboton = document.createElement("div");
const boton = document.createElement("button");


precio.innerHTML = elemento.price + elemento.moneda;
item.innerHTML = elemento.name;
img.src = elemento.img;
boton.innerHTML = "add";


contenedor.classList.add("col-4");
contenedor.classList.add("col-sm-4");
contenedor.classList.add("mt-3");
background.classList.add("background");
row.classList.add("row");
item.classList.add("description");
precio.classList.add("price"); 
divitem.classList.add("col-sm-6");
divitem.classList.add("col-6");
divprecio.classList.add("col-6");
divprecio.classList.add("col-sm-6");
divprecio.classList.add("text-right");
divboton.classList.add("col-12");
boton.classList.add("btn");


divprecio.appendChild(precio);
divitem.appendChild(item);
row.appendChild(divitem);
row.appendChild(divprecio);
background.appendChild(img);
background.appendChild(row);
contenedor.appendChild(background);
divboton.appendChild(boton);
row.appendChild(divboton);

boton.addEventListener("click", function(){
    carrito.push(elemento);
    actualizarCarrito();
});

return contenedor;
}
function filtros(arreglo){
const caja = document.getElementById("caja");

let i = 0;
caja.innerHTML = "";
for(i=0;i<arreglo.length; i++){
    const element = agregar(arreglo[i]);
    caja.appendChild(element);
}
}

filtros(arreglo);
const allfilter = document.getElementById("all");
const cakesfilter = document.getElementById("cakes");
const cupcakesfilter = document.getElementById("cupcakes");
const sweetsfilter = document.getElementById("sweets");
const donutfilter = document.getElementById("donuts");
const inputfilter = document.getElementById("input");

allfilter.addEventListener("click", function(){
    filtros(arreglo);
})
cakesfilter.addEventListener("click", function(){
    const filtrado = arreglo.filter(function(element){
        return element.category == "cake";
    })
    filtros(filtrado);
})
cupcakesfilter.addEventListener("click", function(){
    const filtrado = arreglo.filter(function(element){
        return element.category == "cupcake";
    })
    filtros(filtrado);
})
sweetsfilter.addEventListener("click", function(){
    const filtrado = arreglo.filter(function(element){
        return element.category == "sweet";
    })
    filtros(filtrado);
})
donutfilter.addEventListener("click", function(){
    const filtrado = arreglo.filter(function(element){
        return element.category == "dougnhuts";
    })
    filtros(filtrado);
})
inputfilter.addEventListener("keyup", function(event){
    const key = event.which;
    const value = event.target.value;
    if(key==13){
        console.log(key);
        const filtrado = arreglo.filter(function(element){
            return element.name.includes(value);
        })
        filtros(filtrado);
    }
    if(value==""){
        filtros(arreglo);
    }
})
function actualizarCarrito(){
    let precioFinal = 0;
    const precio = document.getElementById ("precio");
    carrito.forEach(function(elemento){
        precioFinal += elemento.price;
    });
    precio.innerHTML = carrito.length + " items - $ " + precioFinal;
}
   






    







