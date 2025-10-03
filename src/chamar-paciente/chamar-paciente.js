//token/ID
const tokenSalvo = localStorage.getItem("tokenId");
const inputId = document.getElementById("inputId");

if(tokenSalvo){
    inputId.value = tokenSalvo;
}