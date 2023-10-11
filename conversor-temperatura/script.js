const btnFahr = document.querySelector('#fahr')
const btnCels = document.querySelector('#cels')

let resp = null

function pegaTemp() {
    const temp = document.querySelector('#temp')
    const valorTemp = temp.value
    return valorTemp
}

btnFahr.addEventListener('click', () => {
    // (0 °C × 9/5) + 32 = 32 °F
    var temp = pegaTemp()
    resp = (temp * 9 / 5) + 32
    document.querySelector('#resp').innerHTML =`A temperatura é ${resp}°F.`
})

btnCels.addEventListener('click', () => {
    // (0 °F -32) x 5/9 = -17,77 °C
    var temp = pegaTemp()
    resp = (temp - 32) * 5 / 9
    document.querySelector('#resp').innerHTML =`A temperatura é ${resp}°C.`
})