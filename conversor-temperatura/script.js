const btnFahr = document.querySelector('#fahr')
const btnCels = document.querySelector('#cels')
const temp = document.querySelector('#temp')
const valorTemp = temp.value

let resp = null

btnFahr.addEventListener('click', () => {
    // (0 °C × 9/5) + 32 = 32 °F
    resp = (valorTemp * 9 / 5) + 32
    document.querySelector('#resp').innerHTML =`${resp}`
})
