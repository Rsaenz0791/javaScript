
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

const listaProductos = [{id:1,nombre:"sub 1",precio:1000},
                        {id:2,nombre:"sub 2",precio:2000},
                        {id:3,nombre:"sub 3",precio:3000},
                    ]

listaProductos.forEach( producto => {

    console.log(producto.id)
    console.log(producto.nombre)
    console.log(producto.precio)
    
})

console.log("Desea ayudar con el asado?")
let rta = ""

do {
    
    let id = prompt("Que tipo de Sub quiere?",1)

    rta = prompt("Desea regalar otra Sub? s/n")

} while (rta != "n")

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


