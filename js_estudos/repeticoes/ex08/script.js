function verificar() {
    let num = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    let fat = num

    for(let i = num - 1; i >= 1; i--) {
        fat = fat * i
    }
    resp.innerHTML = `O fatorial de ${num} é ${fat}`
}