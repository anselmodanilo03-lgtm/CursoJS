var idade = document.querySelector('#num')
var resp = document.querySelector('#res')

function verificar() {
    
    if (Number(idade.value == 0)) {
        window.alert('Por favor, digite uma idade válida')
    } else if (idade.value >= 18) {
        resp.innerHTML = `Você é <strong>Maior de Idade!</strong>`
    } else {
        resp.innerHTML = `Você é <strong>Menor de Idade!</strong>`
    }
}