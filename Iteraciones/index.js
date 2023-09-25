let boton = document.getElementById("Boton");
let salida1 = document.getElementById("Salida1");
let salida2 = document.getElementById("Salida2");
let salida3 = document.getElementById("Salida3");
let salida4 = document.getElementById("Salida4");
let salida5 = document.getElementById("Salida5");

boton.addEventListener("click",Operaciones);
boton.addEventListener("click",Validar);

function Operaciones(){

    let Num1=parseFloat(document.getElementById("Primer").value);
    let Num2=parseFloat(document.getElementById("Segundo").value);

    cont=0;
    if(Num1<=0 || Num2<=0){
        window.alert("Ingrese numeros mayor a cero");
        return;
    }
    while (cont<=5){
        cont++;
        if(cont==1){
            let Respuesta = Num1+Num2;
            salida1.innerHTML=`1. Resultado de la suma ${Respuesta}`;
        }
        if(cont==2){
            let Respuesta = Num1-Num2;
            salida2.innerHTML=`2. Resultado de la resta ${Respuesta}`;
        }
        if(cont==3){
            let Respuesta = Num1*Num2;
            salida3.innerHTML=`3. Resultado de la multiplicacion ${Respuesta}`;
        }
        if(cont==4){
            let Respuesta = Num1/Num2;
            salida4.innerHTML=`4. Resultado de la division ${Respuesta}`;
        }
        if(cont==5){
            let Respuesta = Num1%Num2;
            salida5.innerHTML=`5. Resto de una división entre enteros ${Respuesta}`;
        }
    } 
}