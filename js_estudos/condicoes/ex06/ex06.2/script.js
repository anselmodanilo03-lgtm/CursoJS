function verificar() {
    let dia = parseInt(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    
    switch (dia) {
        case 1:
            resp.innerHTML = 'Você escolheu <strong>Domingo</strong>'
            break;

        case 2:
            resp.innerHTML = 'Você escolheu <strong>Segunda-feira</strong>'
            break;

        case 3:
            resp.innerHTML = 'Você escolheu <strong>Terça-feira</strong>'
            break;

        case 4: 
            resp.innerHTML = 'Você escolheu <strong>Quarta-feira</strong>'
            break;

        case 5: 
            resp.innerHTML = 'Você escolheu <strong>Quinta-feira</strong>'
            break;

        case 6:
            resp.innerHTML = 'Você escolheu <strong>Sexta-feira</strong>'
            break;
        
        case 7: 
            resp.innerHTML = 'Você escolheu <strong>Sábado</strong>'
            break;

        default:
            window.alert('Digite um número válido')
            return
    }

}
