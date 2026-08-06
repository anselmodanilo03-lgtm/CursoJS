function verificar() {
    var n = Number(document.getElementById('nota').value)
    var resul = document.getElementById('res')
    if (n >= 9) {
        resul.innerHTML = '<strong>PARABÉNS</strong>! Sua nota foi Excelente!'
    } else if (n >= 7) {
        resul.innerHTML = '<strong>APROVADO</strong>! Sua nota foi Boa!'
    } else if (n >= 5) {
        resul.innerHTML = '<strong>EM RECUPERAÇÃO</strong>! Sua nota foi Mediana'
    } else {
        resul.innerHTML = '<strong>REPROVADO</strong>! Sua nota foi Abaixo do esperado'
    }
}