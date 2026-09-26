function soma() {
    let numeros = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    let soma = 0

    while (numeros != 0) {

        soma = soma + numeros

        if (numeros === 0) {
            break
        } 
    }
    resp.innerHTML = `A soma de todos os números é: ${soma}`
}