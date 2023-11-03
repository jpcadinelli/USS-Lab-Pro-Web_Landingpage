const getTime = () => {
    const date = new Date
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

setInterval(() => {
    const { hours, minutes, seconds } = getTime()

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
}, 1000)