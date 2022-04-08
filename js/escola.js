const nome = document.getElementById("nome")

const n1 = document.getElementById("n1")

const n2 = document.getElementById("n2")

const n3 = document.getElementById("n3")

const botao = document.getElementById("b1")

const med = document.getElementById("me")

const r = document.getElementById("resp")

const botao2 = document.getElementById("b2")

botao2.addEventListener('click', limpar)

function limpar() {
    nome.value = ""
    n1.value = ""
    n2.value = ""
    n3.value = ""
    med.value = ""

}

botao.addEventListener('click', () => {

    let n = nome.value

    let num1 = Number(n1.value)

    let num2 = Number(n2.value)

    let num3 = Number(n3.value)

    let m = Number(med.value)

    let mf = (num1 + num2 * 2 + num3 * 3 + m) / 7


    r.innerHTML = (`<h2>${n}<h2> você tirou : 
    <p> Nota 1: ${num1}| 
    Nota 2: ${num2}| 
    Nota 3: ${num3}|
    Média Execícios: ${m}| 
    Média Final: ${mf .toFixed(2)}<p>`)
})