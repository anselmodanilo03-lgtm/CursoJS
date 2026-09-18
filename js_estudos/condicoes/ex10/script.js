function verificar() {
    let i = document.getElementById('txtidade').value
    let tipo = document.getElementById('tipo').value
    let resp = document.getElementById('res')

    if (i == '' || i <= 0 || i > 110) {
        alert('Digite uma idade válida')
        return
    }

    let idade = Number(i)

    if (tipo == 'inteira') {
        resp.innerHTML = 'O preço do ingresso será de R$40'
    } else if (tipo == 'meia' && idade <= 18 || idade >= 60) {
        resp.innerHTML = 'O preço do ingresso será de R$20'
    } else if (idade > 18 && idade < 60 && tipo == 'meia') {
        resp.innerHTML = 'É necessário ser menor de 18 ou maior que 60 para poder comprar meia entrada'
    } else if (tipo == 'vip') {
        resp.innerHTML = 'O preço do ingresso será de R$100'
    }
}