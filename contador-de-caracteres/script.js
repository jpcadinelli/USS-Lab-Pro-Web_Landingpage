const btnCont = document.querySelector('#button')

btnCont.addEventListener('click', () => {
    const textarea = document.querySelector('#textarea').value
    const resp = textarea.length 
    document.querySelector('#resp').innerHTML =`Este texto tem ${resp} caracteres.`
})