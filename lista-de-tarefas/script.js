const adcBtn = document.querySelector('#adc-tarefa');
const listaTarefasContainer = document.querySelector('.lista-tarefas');
const nomeTarefa = document.querySelector('#input-tarefa');

let tarefas = [];

function limparInput() {
    nomeTarefa.value = '';
};

function atualizarListaTarefas() {
    listaTarefasContainer.innerHTML = ``
    for(var i = 0; i < tarefas.length; i++) {
        listaTarefasContainer.innerHTML += `
            <li class='tarefa'>
                <div class='info-esq-tarefa'>
                    <i class="fa-solid fa-circle-check tarefa-a-fazer check"></i>
                    <p>${tarefas[i].nome}</p>
                </div>
                <i class="fa-solid fa-trash-can tarefa-a-fazer trash"></i>
            </li>
        `
    };
    console.log(tarefas);
    
    let checkLista = document.querySelectorAll('.check');
    for (var inc = 0; inc < checkLista.length; inc++) {
        checkLista[inc].addEventListener('click', () => {
            alert('O elemento clicado foi o ' + inc);
        });
    }
    console.log(checkLista);
};

adcBtn.addEventListener('click', () => {
    let inserindoTarefa = new Object();
    inserindoTarefa.nome = nomeTarefa.value;
    inserindoTarefa.concluida = false;
    tarefas.push(inserindoTarefa)
    
    limparInput();
    atualizarListaTarefas();
});


let trashLista = document.querySelectorAll('.trash');
trashLista.addEventListener('click', () => {

});