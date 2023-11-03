const getTime = () => {
    const date = new Date
    return {
        hours: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }
}

console.log(getTime())