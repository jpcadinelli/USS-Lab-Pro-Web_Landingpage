const quizDiv = document.querySelector('#quiz')
const main = document.querySelector('#main')
const resultadoDiv = document.querySelector('.resultado')
const resultado = document.querySelector('#resultado')
const tamanho = document.querySelector('#tamanho')
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
        "id": "1",
        "p": "Como podemos definir um Algoritmo?",
        "a": "Sequência de comandos ordenados, infinitos e ambíguos que são empregados para executar uma tarefa.",
        "b": "Sequência de instruções ordenadas, infinitas e não-ambíguas que são empregadas para executar uma tarefa.",
        "c": "Sequência de instruções ordenadas, finitas e não-ambíguas que são empregadas para executar uma tarefa.",
        "d": "Sequência de comandos ordenados, infinitos e não-ambíguos que são empregados para executar uma tarefa.",
        "e": "Sequência de comandos desordenados, infinitos e não-ambivalentes que são empregados para executar uma tarefa.",
        "r": "c"
    },
    {
        "id": "2",
        "p": "Qual dos seguintes itens possui apenas tipos válidos usados em lógica de programação (tipos primitivos)?",
        "a": "Inteiro, Temporal, Caractere, Double",
        "b": "Booleano, Real, Inteiro, Irracional",
        "c": "Inteiro, Booleano, Tipografia, Double",
        "d": "Inteiro, Booleano, Caractere, Double",
        "e": "Temporal, Triple, Caractere, Double",
        "r": "d"
    },
    {
        "id": "3",
        "p": "Quais são todos os estados possíveis que um tipo lógico pode assumir?",
        "a": "Verdadeiro, Duvidoso",
        "b": "Falso, Duvidoso, Verdadeiro",
        "c": "Incerto, Certo",
        "d": "Verdadeiro, Falso",
        "e": "Verdadeiro, Errado",
        "r": "d"
    },
    {
        "id": "4",
        "p": "Qual dos seguintes itens é melhor representado por um valor constante em um algoritmo?",
        "a": "Salário de um Funcionário",
        "b": "Valor da Temperatura no final de semana",
        "c": "Valor matemático de Pi",
        "d": "Distância da Terra à Lua",
        "e": "Velocidade de um carro em movimento",
        "r": "c"
    },
    {
        "id": "5",
        "p": "É possível ordenar valores numéricos já armazenados em um vetor de números decimais?",
        "a": "Não, somente é possível ter valores em ordem se os valores forem inseridos em ordem",
        "b": "Sim, mas somente se os números forem inteiros. Números decimais não podem ser ordenados",
        "c": "Sim, mas para isso é necessário usar um algoritmo para ordenação de vetores",
        "d": "Vetores não permitem o armazenamento de números decimais, somente números reais",
        "e": "Não, não é possível ordenar valores já armazenados em um vetor em nenhuma hipótese",
        "r": "c"
    },
    {
        "id": "6",
        "p": "Quais são os tipos de arrays que podemos empregar na criação de algoritmos?",
        "a": "Unidimensional (linha), Bidimensional (vetor), Tridimensional (cubo)",
        "b": "Dimensional (com dimensões), Adimensional (sem dimensões), Paradimensional (com e sem dimensões)",
        "c": "Unidimensional (vetor), Bidimensional (quadrado), Tridimensional (esfera)",
        "d": "Unidimensional (vetor), Bidimensional (matriz), Tridimensional (cubo)",
        "e": "Unidimensional (ponto), Bidimensional (matriz), Tridimensional (campo)",
        "r": "d"
    },
    {
        "id": "7",
        "p": "O que é Compilação?",
        "a": "Comandos contidos no código-fonte são executados à medida em que são traduzidos, sendo necessária a interpretação toda vez que se quiser rodar o programa.",
        "b": "Tradução do código-fonte em um ou mais arquivos que podem ser armazenados e executados quantas vezes se desejar, sem necessitar de nova compilação.",
        "c": "Junção de comandos do código-fonte em um arquivo empacotado para distribuição por um meio específico para instalação do programa.",
        "d": "Execução das instruções contidas em um script contendo o código-fonte, de forma sequencial.",
        "e": "Organização do código-fonte em uma pasta contendo arquivos em ordem alfabética",
        "r": "b"
    },
    {
        "id": "8",
        "p": "Precisamos de um vetor (array unidimensional) para armazenar 15 valores numéricos relativos aos salários de funcionários de uma empresa. Qual das seguintes instruções pode ser empregada para esse fim em um algoritmo?",
        "a": "salarios : vetor [0..15] de real",
        "b": "salarios : vetor [1..15] de numeros",
        "c": "salarios : vetor [0..14] de salario",
        "d": "salarios : vetor [0..14] de inteiro",
        "e": "salarios : vetor [0..14] de real",
        "r": "e"
    },
    {
        "id": "9",
        "p": "Qual dos seguintes itens mostra um laço for (para) escrito corretamente?",
        "a": "para (con = 1; con < 10; con–) { instruções }",
        "b": "para (con = 10; con >= 1; con++) { instruções }",
        "c": "para (con = 10; con < 10; con–) { instruções }",
        "d": "para (con = 1; con <= 10; con++) { instruções }",
        "e": "para (con == 10; con > 1; con–) { instruções }",
        "r": "d"
    },
    {
        "id": "10",
        "p": "O que é uma Variável?",
        "a": "Local na memória CMOS do computador empregado para armazenar de forma temporária os dados que são utilizados pelo programa.",
        "b": "Valor que varia conforme passa o tempo, sendo sempre modificado conforme o programa vai sendo executado.",
        "c": "Estado lógico de uma constante, que pode variar entre verdadeiro e falso",
        "d": "Local na memória RAM do computador utilizado para armazenar temporariamente dados que são utilizados pelo programa.",
        "e": "Valor armazenado em locais variáveis no computador, como HD, RAM ou Memória Cache.",
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
    resultado.textContent = pontos
    tamanho.textContent = perguntasObj.length
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