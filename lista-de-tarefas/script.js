const adcBtn = document.querySelector('#adc-tarefa');
const listaTarefasContainer = document.querySelector('.lista-tarefas');
const nomeTarefa = document.querySelector('#input-tarefa');

let tarefas = [];

function limparInput() {
    nomeTarefa.value = '';
};

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    atualizarListaTarefas();
}

function concluirTarefa(posicao) {
    tarefas[posicao].concluida = !tarefas[posicao].concluida;
    atualizarListaTarefas();
}

function atualizarListaTarefas() {
    listaTarefasContainer.innerHTML = ``;
    let novaLi = '';
    tarefas.forEach((item, posicao) => {
        novaLi += `
            <li class='tarefa ${item.concluida && 'concluida'}'>
                <div class='info-esq-tarefa'>
                    <i class="fa-solid fa-circle-check tarefa-a-fazer check ${item.concluida && 'tarefa-concluida'}" onclick='concluirTarefa(${posicao})'></i>
                    <p>${item.nome}</p>
                </div>
                <i class="fa-solid fa-trash-can tarefa-a-fazer trash" onclick='deletarTarefa(${posicao})'></i>
            </li>
        `;
    });
    listaTarefasContainer.innerHTML = novaLi;
    console.log(tarefas);
};

adcBtn.addEventListener('click', () => {
    let inserindoTarefa = new Object();
    inserindoTarefa.nome = nomeTarefa.value;
    inserindoTarefa.concluida = false;
    tarefas.push(inserindoTarefa);
    
    limparInput();
    atualizarListaTarefas();
});