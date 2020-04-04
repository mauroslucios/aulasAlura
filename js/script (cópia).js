let titulo = document.querySelector(".titulo");
titulo.textContent= "Consultório de Nutrição";

let pacientes = document.querySelectorAll(".paciente");


for(let i = 0; i < pacientes.length ;i++){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdPeso.textContent;

    let tdGordura = paciente.querySelector(".info-gordura");
    let gordura = tdGordura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
    }
    if(altura <= 0 || altura >= 300){
        alturaValida = false;
        tdAltura.textContent = "Altura Inválida";
    }

    if(alturaValida && pesoValido){
        let imc = (peso/(altura*altura));
        tdImc.textContent = imc.toFixed(2);
    }
}































/*console.log(document.getElementById("elementoOne").innerHTML)
console.log(document.getElementsByClassName("classe")[1])
console.log(document.getElementsByTagName("input"))
console.log(document.querySelector("p.teste2"))
   if(document.getElementById("pai").querySelectorAll(".filho")[0].length > 1)
   console.log("oi")
   let img = document.createElement("img");
   img.src="http://lorempixel.com/400/200/";
   console.log(
       img
   )   
   
   let versa = document.createElement("p");
   versa.innerHTML = "versa";
   let sentra = document.createElement("p");
   sentra.innerHTML = "sentra";
   let rennegade = document.createElement("p");
   rennegade.innerHTML="rennegade";
   document.getElementById("jeep").appendChild(rennegade);
   document.getElementById("nissan").appendChild(versa);
   document.getElementById("nissan").appendChild(sentra);
   document.getElementById("nissan").removeChild(sentra);
   console.log(
       document.querySelector(".elementaryos").parentNode.parentNode
   )

   const square = function(x){
       return x * x;
   }
   console.log(square(12)); */