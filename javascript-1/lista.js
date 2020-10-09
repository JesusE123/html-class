const new_task = document.getElementById("new_task");
const add = document.getElementById("add");
const elements = [];
const lista = document.getElementById("lista");

add.addEventListener("click", function(){
    const value = new_task.value;
    const resultado = verificar(elements, value);
    if(value != "" && resultado == false){
        elements.push(value);
        new_task.value = "";
        crearElement(value);
    }
})
function crearElement(texto){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const spantexto = document.createTextNode("close");
    span.appendChild(spantexto);
    span.classList.add("material-icons");
    span.classList.add("icons");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const div = document.createElement("div");
    div.classList.add("checkbox_fix");
    const label = document.createElement("label");
    const labeltexto = document.createTextNode(texto);
    label.appendChild(labeltexto);

    div.appendChild(checkbox);
    div.appendChild(label);
    li.appendChild(span);
    li.appendChild(div);
    lista.appendChild(li);
   span.addEventListener("click",function(){
       lista.removeChild(li);
   })
   checkbox.addEventListener("change", function(evento){
       const checked = evento.target.checked;
       if(checked == true){
        label.classList.add("add");
       }else{
           label.classList.remove("add");
       }
           
   })
}
function verificar(arreglo, texto){
    let flag = false;
    let i = 0;
    /*for (i; i< arreglo.length; i++){
        if(arreglo[i]== texto){
            flag = true;
        }
    }*/
    while (i< arreglo.length){
        if(arreglo[i]== texto){
            flag = true;
        }
        i = i+1;
    }
    return flag;
}

const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    lista.innerHTML = "";
})


