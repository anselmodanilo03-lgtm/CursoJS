function verificar() {
    let num = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')

    if (num == 0) {
        resp.innerHTML = `O número que foi digitado é <strong>zero</strong>`
    } else if (num > 0) {
        resp.innerHTML = `O número ${num} é <strong>positivo</strong>`
    } else {
        resp.innerHTML = `O número ${num} é <strong>negativo</strong>`
    }
}