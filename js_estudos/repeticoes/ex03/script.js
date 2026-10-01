let soma = 0  // fora da função

function somaNumeros() {
    let numeros = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    let input = document.getElementById('txtnum')

    if (numeros === 0) {
        resp.innerHTML = `A soma de todos os números é: ${soma}`
    } else {
        soma = soma + numeros
        resp.innerHTML = `Soma atual: ${soma}`
        input.value = ''
        input.focus()    
    }
}