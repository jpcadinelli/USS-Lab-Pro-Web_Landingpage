const getTime = () => {
    const date = new Date
    return {
        data: date,
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

function aparecerTexto() {
    document.querySelector('.informacoes').classList.add('mostrar-informacoes')
}

function reset() {
    document.querySelector('.informacoes').classList.remove('mostrar-informacoes')
}

setInterval(() => {
    const { data, hours, minutes, seconds } = getTime()

    if (hours < 10) {
        document.querySelector('.hora').innerHTML = '0' + hours
    } else {
        document.querySelector('.hora').innerHTML = hours
    }
    if (minutes < 10) {
        document.querySelector('.minuto').innerHTML = '0' + minutes
    } else {
        document.querySelector('.minuto').innerHTML = minutes
    }
    if (seconds < 10) {
        document.querySelector('.segundo').innerHTML = '0' + seconds
    } else {
        document.querySelector('.segundo').innerHTML = seconds
    }

    document.querySelector('.fuso-horario').innerHTML = data
}, 1000)