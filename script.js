//index
const btnSalvarToken = document.getElementById("btnSalvarToken");
const inputInsertId = document.getElementById("inputInsertId");

btnSalvarToken.addEventListener("click", () => {
    const tokenId = inputInsertId.value;
    console.log(tokenId)
    localStorage.setItem("tokenId", tokenId);
});