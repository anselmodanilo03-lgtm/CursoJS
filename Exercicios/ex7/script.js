function verificar() {
    var num = Number(document.getElementById('numero').value)
    var resul = document.getElementById('res')
    if (num === '') {
        window.alert('[ERRO]! Digite novamente')
    } else if (num % 2 == 0) {
        resul.innerHTML = `O número ${num} é <strong>PAR!</strong>`
    } else {
        resul.innerHTML = `O número ${num} é <strong>IMPAR!</strong>`
    }
}