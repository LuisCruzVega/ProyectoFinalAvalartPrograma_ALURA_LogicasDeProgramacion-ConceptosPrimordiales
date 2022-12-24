var Correo ="Hola@hotmail.com" //Imaginemos que nuestor correod e acceso, ya se encuentre en una DB
var inputEmail=document.querySelector("input[type=email]"); //Creamos una variable que va almacenar todo lo que se va capturar en el imput
function VerificarCorreo(){
    if(String(inputEmail.value)===Correo){
        location.href="./RecoveryEmailSent.html";
    }else{
        alert("Este correo no existe en nuestra DATA");
        location.href="./Sorry404Error.html";
    }
}
var ButtonInput=document.querySelector("button#Ingresar");
ButtonInput.onclick=VerificarCorreo;