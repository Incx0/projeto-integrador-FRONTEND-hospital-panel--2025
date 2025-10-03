//cadastrar paciente
//--paciente
const bodyAP = document.getElementById("bodyAP");
const contentFormPaciente = document.getElementById("contentFormPaciente");
const btnAvancarPaciente = document.getElementById("btnAvancarPaciente");
//--classificar risco
const contentFormClassificarRisco = document.getElementById("contentFormClassificarRisco");
const btnVoltarClassificacaoRisco = document.getElementById("btnVoltarClassificacaoRisco");
const btnAvancarClassificacaoRisco = document.getElementById("btnAvancarClassificacaoRisco");
//--triagem
const contentFormTriagemUp = document.getElementById("contentFormTriagemUp");
const contentFormTriagemDown = document.getElementById("contentFormTriagemDown");
const btnVoltarTriagem = document.getElementById("btnVoltarTriagem");

//token/ID
const tokenSalvo = localStorage.getItem("tokenId");
const inputId = document.getElementById("inputId");

if(tokenSalvo){
    inputId.value = tokenSalvo;
}

const alterDivPaciente = ()=>{
    contentFormPaciente.classList.toggle("hidden");
    contentFormClassificarRisco.classList.toggle("hidden");
};
const alterDivTriagem = ()=>{
    bodyAP.classList.toggle("bodyAPReverse");
    contentFormTriagemUp.classList.toggle("hidden");
    contentFormTriagemDown.classList.toggle("hidden");
    contentFormClassificarRisco.classList.toggle("hidden");
};

btnAvancarPaciente.addEventListener("click", () => {
    alterDivPaciente()
});

btnVoltarClassificacaoRisco.addEventListener("click", () => {
    alterDivPaciente()
});

btnVoltarTriagem.addEventListener("click", () => {
    alterDivTriagem()
});

btnAvancarClassificacaoRisco.addEventListener("click", ()=>{
    alterDivTriagem()
});