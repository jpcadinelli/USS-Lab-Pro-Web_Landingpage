const quizDiv = document.querySelector('#quiz')
const main = document.querySelector('#main')
const resultadoDiv = document.querySelector('.resultado')
const p = document.querySelector('.pergunta')
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
const e = document.querySelector('.e')

let i = 0
let resp = null
let pontos = 0

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
    zeraPonto()
    i = 0
    quizDiv.classList.remove('escondido')
    questaoNaTela()
}

function questaoNaTela() {
    p.textContent = i + '- ' + perguntasObj[i].p
    a.textContent = 'a) ' + perguntasObj[i].a
    b.textContent = 'b) ' + perguntasObj[i].b
    c.textContent = 'c) ' + perguntasObj[i].c
    d.textContent = 'd) ' + perguntasObj[i].d
    e.textContent = 'e) ' + perguntasObj[i].e
}

function selecionaAlternativa(alt) {
    resetaAlt()
    resp = alt
    if (resp == 'a') {
        a.classList.add('selecionado');
    } else if (resp == 'b') {
        b.classList.add('selecionado');
    } else if (resp == 'c') {
        c.classList.add('selecionado');
    } else if (resp == 'd') {
        d.classList.add('selecionado');
    } else if (resp == 'e') {
        e.classList.add('selecionado');
    }
}

function confirmar() {
    if ( resp == perguntasObj[i].r) {
        marcarPonto()
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
    resetaAlt()
    questaoNaTela()
}

function telaDeResultado() {
    quizDiv.classList.add('escondido')
    main.classList.add('escondido')
    resultadoDiv.classList.remove('escondido')
}

function resetaAlt() {
    a.classList.remove('selecionado')
    b.classList.remove('selecionado')
    c.classList.remove('selecionado')
    d.classList.remove('selecionado')
    e.classList.remove('selecionado')
}

function marcarPonto() {
    pontos += 1
}

function zeraPonto() {
    pontos = 0
}

function inicio() {
    location.reload()
}