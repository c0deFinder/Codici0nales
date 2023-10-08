function calcular () {
    const tope = 10
    let entry = parseInt(document.getElementById("entrada").value);
    let entry2 = parseInt(document.getElementById("entrada2").value);
    let entry3 = parseInt(document.getElementById("entrada3").value);
    const sumar = document.getElementById("sumar")
    const sptotal = document.getElementById("spTotal")
    

    const suma = entry + entry2 + entry3 
    if (suma < 11) {
        sptotal.innerHTML = "" + suma;
        sptotal.style.color = "red";

    } else if (entry <= 0 || entry2 <= 0 || entry3<= 0) {
        alert("El numero ingresado debe ser mayor o igual de 0");
    }

    else if (suma >10)
    {alert("supero la cantidad maxima")}
    sumar.addEventListener("click",calcular)

}

function Add () {
    let element = parseInt(document.getElementById("entrada").value);
    const total = document.getElementById("total")
    const agregar = document.getElementById("agregar")

if (element>10 )
   {total.innerHTML = 'más de 10 stickers, excedió su límite';}
            
if (element <= 10)
{total.innerHTML = '' + element;}
agregar.addEventListener("click",Add);
           
}

function removerItem() {
    
    let removerItem = document.getElementById("quitar")
    removerItem.addEventListener("click",removerItem)
    let borrar = 0
    total.innerHTML = borrar
}
function removerItem2() {
    
    let removerItem = document.getElementById("quitar")
    removerItem.addEventListener("click",removerItem2)
    let borrar = 0
    total2.innerHTML = borrar
}
function removerItem3() {
    
    let removerItem = document.getElementById("quitar")
    removerItem.addEventListener("click",removerItem3)
    let borrar = 0
    total3.innerHTML = borrar
    
}



function Add2 () {
    let element2 = parseInt(document.getElementById("entrada2").value);
    const total2 = document.getElementById("total2")
    
if (element2 <= 10)
    {total2.innerHTML = '' + element2;}

if (element2>10 )
    {total2.innerHTML = 'más de 10 stickers, excedió su límite';}

}

function Add3() {
    
let element3 = parseInt(document.getElementById("entrada3").value);
const total3 = document.getElementById("total3")

if (element3 <= 10)
    {total3.innerHTML = ' ' + element3;}

if (element3>10 )
    {total3.innerHTML = 'más de 10 stickers, excedió su límite';}



}

function verificar() {
    const select1 = document.getElementById("option1").value;
    const select2 = document.getElementById("option2").value;
    const select3 = document.getElementById("option3").value;
    

    let clave = select1 + select2 + select3;
    
    switch  (clave) {
        case "911" :
            document.getElementById("password").textContent = "Password 1 es correcto "
            break;
        case "714":
            document.getElementById("password").textContent = "Password 2 es correcto "
            break;
        default: 
            document.getElementById("password").textContent = "Password es incorrecto "
            break;

    }

}






