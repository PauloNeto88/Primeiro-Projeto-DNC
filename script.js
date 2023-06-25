var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsqueda = window.document.getElementById("seta-esquerda") 


function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsqueda.style ="display:flex; margin-pot:55%    "
}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style ="display:flex; marfgin-top:55%"
    setaEsqueda.style ="display:none"
}