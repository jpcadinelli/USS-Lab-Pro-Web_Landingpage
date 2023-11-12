const quizDiv = document.querySelector('#quiz');

function iniciarQuiz() {
    const tema = document.querySelector('#tema')
    carregarJson(tema)
}

function carregarJson(tema) {
    fetch('quiz.json')
        .then(response => response.json())
        .then(perguntas => {
            perguntas.map(pergunta => {
                const card = document.createElement('div')
                card.classList.add('perguntas')

                const p = document.createElement('p')
                p.classList.add('pergunta')
                p.textContent = `quiz.${tema}.p`

                const respostas = document.createElement('ul')
                const a = document.createElement('li')

                card.appendChild(p)
                card.appendChild(a)

                quizDiv.appendChild(card)
            })
        })
}