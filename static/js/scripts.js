window.onload=function(){

const POP_UP = document.getElementById("popUp");

document.getElementById("jaunaGramata").addEventListener("click", () => {

    POP_UP.style.display = "block"
})

document.getElementById("pievienotGramatu").addEventListener("click", () => {

    console.log(virsraksts.value);

    POP_UP.style.display = "none"
})
}