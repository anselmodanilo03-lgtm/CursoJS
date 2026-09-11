function verificar() {
    let dia = parseInt(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    
    if (dia == 1) {
        resp.innerHTML = 'Você escolheu <strong>Domingo</strong>'
    } else if (dia == 2) {
        resp.innerHTML = 'Você escolheu <strong>Segunda-feira</strong>'
    } else if (dia == 3) {
        resp.innerHTML = 'Você escolheu <strong>Terça-feira</strong>'
    } else if (dia == 4) {
        resp.innerHTML = 'Você escolheu <strong>Quarta-feira</strong>'
    } else if (dia == 5) {
        resp.innerHTML = 'Você escolheu <strong>Quinta-feira</strong>'
    } else if (dia == 6) {
        resp.innerHTML = 'Você escolheu <strong>Sexta-feira</strong>'
    } else if (dia == 7) {
        resp.innerHTML = 'Você escolheu <strong>Sábado</strong>'
    } else {
        window.alert('Digite um número válido')
        return
    }
}
