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
        tdPeso.textContent = "Peso Inválido";
        tdImc.textContent="Imc não calculado";
        paciente.classList.add("valorInvalid");
    }
    if(altura <= 0 || altura >= 300){
        alturaValida = false;
        tdAltura.textContent = "Altura Inválida";
        tdImc.textContent="Imc não calculado";
        paciente.classList.add("valorInvalid");
    }

    if(alturaValida && pesoValido){
        let imc = (peso/(altura*altura));
        tdImc.textContent = imc.toFixed(2);
    }
}


let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    let form = document.querySelector("#addPacientes");
    
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    
    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
   

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});