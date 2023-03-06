function agradecer() {
    let agradecimiento = "Gracias por la info"
    alert(agradecimiento) 
    
}
  

let nombre = prompt("Ingrese su nombre");
agradecer();
let año_actual = parseInt(prompt("Ingrese el año actual"));
agradecer();
let año_nacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
agradecer();
let resultado = año_actual - año_nacimiento;

alert( "Hola " + nombre );

alert("Usted tiene " + resultado + " años ");

if (resultado >= 18 ){
    alert("Usted es mayor de edad");
}
if (resultado <= 18 ){
    alert("Usted es menor de edad");
}
if (resultado >= 30){
    alert("Usted ya esta muy viejo XD");
}

const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
    //evita que el boton se vaya al sitio
        e.preventDefault()
        const link = this.getAttribute('link')
        console.log(link)
        try {
            await navigator.clipboard.writeText(link)
            alert("Se copio el link: " + link)
        } catch (err) {
            console.error(err)
        }
    }


shareButtons.forEach(shareButton =>
        shareButton.addEventListener('click', copyText))