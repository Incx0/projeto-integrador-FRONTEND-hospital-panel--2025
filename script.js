const bodyAP = document.getElementById("bodyAP");
const contentFormPaciente = document.getElementById("contentFormPaciente");
const contentFormTriagem = document.getElementById("contentFormTriagem");
const contentFormClassificarRisco = document.getElementById("contentFormClassificarRisco");
const btnAvancarPaciente = document.getElementById("btnAvancarPaciente");
const btnVoltarClassificacaoRisco = document.getElementById("btnVoltarClassificacaoRisco");
const btnVoltarTriagem = document.getElementById("btnVoltarTriagem");
const btnAvancarClassificacaoRisco = document.getElementById("btnAvancarClassificacaoRisco");

const alterDivPaciente = ()=>{
    contentFormPaciente.classList.toggle("hidden");
    contentFormClassificarRisco.classList.toggle("hidden");
};
const alterDivTriagem = ()=>{
    bodyAP.classList.toggle("bodyAPReverse");
    contentFormTriagem.classList.toggle("hidden");
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

btnAvancarClassificacaoRisco.addEventListener("click", () => {
    alterDivTriagem()
});