function suma(numero1, numero2){
    return numero1 + numero2;
}
function resta(numero1, numero2){
    return numero1 - numero2;
}
function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}
function division(numero1, numero2){
    if (numero2 != 0){
        return numero1 / numero2;
    } else if(numero2 < 0){
        const numeroPositivo = Math.abs(numero2);
        return numero1 / numeroPositivo;      
    } else{
        return 0;
    }
}
var divi = division(6, -2);
console.log(divi);
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const buttonR = document.getElementById("buttonR");
const buttonS = document.getElementById("buttonS");
const buttonM = document.getElementById("buttonM");
const buttonD = document.getElementById("buttonD");
const resultado = document.getElementById("resultado");
buttonS.addEventListener("click", function(){
    const rs = suma(parseInt(numero1.value), parseInt(numero2.value));
    resultado.value = rs;
})
buttonR.addEventListener("click", function(){
    const rs = resta(parseInt(numero1.value), parseInt(numero2.value));
    resultado.value = rs;
})
buttonM.addEventListener("click", function(){
    const rs = multiplicacion(parseInt(numero1.value), parseInt(numero2.value));
    resultado.value = rs;
})
buttonD.addEventListener("click", function(){
    const rs = division(parseInt(numero1.value), parseInt(numero2.value));
    resultado.value = rs;
})
numero1.addEventListener("keydown", validNumber);
numero2.addEventListener("keydown", validNumber);
function validNumber(event){
    const key = event.which;
    if((key >= 48 && key <= 57) || key == 8){
        return true; 
    }else{
        event.preventDefault();
    }       
}




    

