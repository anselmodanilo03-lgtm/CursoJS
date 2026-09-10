function verificar() {
    let num = Number(window.document.getElementById('txtnum').value)
    let resp = window.document.getElementById('res')

    if (num == 0) {
        resp.innerHTML = `O valor zero é par`
    } else if (num % 2 == 0) {
        resp.innerHTML = `O valor digitado ${num} é par`

        if (num > 0) {
            resp.innerHTML += ` e ele é um número positivo`
        } else {
            resp.innerHTML += ` e ele é um número negativo`
        }

    } else {
        resp.innerHTML = `O valor digitado ${num} é ímpar`

        if (num > 0) {
            resp.innerHTML += ` e ele é um número positivo`
        } else {
            resp.innerHTML += ` e ele é um número negativo`
        }
    }
}