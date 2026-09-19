function verificar() {
    let i = document.getElementById('txtidade').value
    let tipo = document.getElementById('tipo').value
    let resp = document.getElementById('res')

    if (i == '' || i <= 0 || i > 110) {
        alert('Digite uma idade válida')
        return
    }

    if (tipo == '') {
        alert('Escolha o tipo de ingresso')
        return
    }

    let idade = Number(i)

    if (tipo === 'inteira') {
        resp.innerHTML = 'O preço do ingresso será de <strong>R$40</strong>'
    } 
    else if (tipo === 'meia') {
        if (idade <= 18 || idade >= 60) {
            resp.innerHTML = 'O preço do ingresso será de <strong>R$20</strong>'
        } else {
            resp.innerHTML = 'Você não tem direito à meia entrada.<br>É necessário ter 18 anos ou menos, ou 60 anos ou mais'
        }
    } 
    else if (tipo === 'vip') {
        resp.innerHTML = 'O preço do ingresso será de <strong>R$100</strong>'
    }
}