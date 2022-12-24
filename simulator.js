let año_actual = parseInt(prompt("Ingrese el año actual"))
let año_nacimiento = parseInt(prompt("Ingrese su año de nacimiento"))
let resultado = año_actual - año_nacimiento;
alert("Usted tiene " + resultado + " años ");
if (resultado >= 18 ){
    alert("Usted es mayor de edad");
}
if (resultado <= 18 ){
    alert("Usted es menor de edad");
}
if (resultado >= 30){
    alert("Usted ya esta muy viejo XD")
}