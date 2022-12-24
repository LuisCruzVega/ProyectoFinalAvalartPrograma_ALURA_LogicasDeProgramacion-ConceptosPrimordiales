var CorreoElectronicoDB="Hola@hotmail.com";//Creamos variables que contiene un valor que va ser que ingresemos en e-mail
var inputEmail=document.querySelector("input[type=email]");//Creamos una variable input que va capturar todo lo que se  agregue en el campo de input.email (CREO QUE ES ASI)
var ContraseniaDB="123456";
var inputContrasenia=document.querySelector("input[type=password]");//Creamos una variable input que va capturar
inputEmail.focus();//Donde aparecesera nuestro cursor para ingresar
function Verificar(){
    if((String(inputEmail.value)===CorreoElectronicoDB)&&(String(inputContrasenia.value)===ContraseniaDB)){
        location.href="./InicioDeSeccionCorrecto.html";
    }else{
        alert("E-mail y/o Password incorrect");
    }
    inputEmail.value="";//Restablemeos valores para que sean ingresados otra vez, independientemente si es verdadero o falso
    inputContrasenia.value="";
    inputEmail.focus();//En que input deseamos que nos aparesca ingresar datos
}
var button=document.querySelector("button#Ingresar");
button.onclick=Verificar;//Al momento que hagamos click en button que verifique
