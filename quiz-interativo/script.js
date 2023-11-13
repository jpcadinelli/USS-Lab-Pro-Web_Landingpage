const quizDiv = document.querySelector('#quiz')
const main = document.querySelector('#main')

let i = 0
let resp = null

const perguntasObj = [
    {
        "p": "Como podemos definir um Algoritmo?",
        "a": "Sequência de comandos ordenados, infinitos e ambíguos que são empregados para executar uma tarefa.",
        "b": "Sequência de instruções ordenadas, infinitas e não-ambíguas que são empregadas para executar uma tarefa.",
        "c": "Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa.",
        "d": "Sequência de comandos ordenados, infinitos e não-ambíguos que são empregados para executar uma tarefa.",
        "e": "Sequência de comandos desordenados, infinitos e não-ambivalentes que são empregados para executar uma tarefa.",
        "r": "c"
    },
    {
        "p": "Qual dos seguintes itens possui apenas tipos válidos usados em lógica de programação (tipos primitivos)?",
        "a": "Inteiro, Temporal, Caractere, Double",
        "b": "Booleano, Real, Inteiro, Irracional",
        "c": "Inteiro, Booleano, Tipografia, Double",
        "d": "Inteiro, Booleano, Caractere, Double",
        "e": "Temporal, Triple, Caractere, Double",
        "r": "d"
    },
    {
        "p": "Quais são todos os estados possíveis que um tipo lógico pode assumir?",
        "a": "Verdadeiro, Duvidoso",
        "b": "Falso, Duvidoso, Verdadeiro",
        "c": "Incerto, Certo",
        "d": "Verdadeiro, Falso",
        "e": "Verdadeiro, Errado",
        "r": "d"
    }
]

function iniciarQuiz() {
    i = 0
    quizDiv.classList.remove('escondido')
    questaoNaTela()
}

function questaoNaTela() {
    const p = document.querySelector('.pergunta')
    const a = document.querySelector('.a')
    const b = document.querySelector('.b')
    const c = document.querySelector('.c')
    const d = document.querySelector('.d')
    const e = document.querySelector('.e')

    p.textContent = perguntasObj[i].p
    a.textContent = perguntasObj[i].a
    b.textContent = perguntasObj[i].b
    c.textContent = perguntasObj[i].c
    d.textContent = perguntasObj[i].d
    e.textContent = perguntasObj[i].e
}

function selecionaAlternativa(alt) {
    switch (alt) {
        case 'a':
            a.classList.add('selecionado')
    }
    resp = alt
}

function confirmar() {
    if ( resp == perguntasObj[i].r) {
        alert('Você acertou!')
    } else {
        alert('Você errou! A resposta certa é ' + perguntasObj[i].r)
    }
    if (i < perguntasObj.length - 1) {
        i += 1
    } else {
        telaDeResultado()
        return
    }
    questaoNaTela()
}

function telaDeResultado() {
    quizDiv.classList.add('escondido')
}