const quizDiv = document.querySelector('#quiz');
const main = document.querySelector('#main')

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
    let i = 0

    quizDiv.innerHTML = `
        <div class='perguntas'>
            <p class="pergunta">${perguntasObj[i].p}</p>
            <ul>
                <li><button type="button" onclick="selecionaAlternativa(a, ${i})">a) ${perguntasObj[i].a}</button></li>
                <li><button type="button" onclick="selecionaAlternativa(b, ${i})">b) ${perguntasObj[i].b}</button></li>
                <li><button type="button" onclick="selecionaAlternativa(c, ${i})">c) ${perguntasObj[i].c}</button></li>
                <li><button type="button" onclick="selecionaAlternativa(d, ${i})">d) ${perguntasObj[i].d}</button></li>
                <li><button type="button" onclick="selecionaAlternativa(e, ${i})">e) ${perguntasObj[i].e}</button></li>
            </ul>
            <button type="button" class='confirmar' onclick='confirmar(${quest}, ${alt})'>Confirmar</button>
        </div>    
    `
}

function selecionaAlternativa(alt, quest) {
    const quest = quest
    const alt = alt
}

function confirmar(quest, alt) {
    if (perguntasObj[quest].alt == perguntasObj[quest].r) {
        alert('Você acertou!')
    } else {
        alert('Você errou! A resposta certa é' + perguntasObj[quest].r)
    }
}