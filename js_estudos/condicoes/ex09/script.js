function verificar() {
    let i = document.getElementById('txtidade').value
    let sim = document.getElementById('txtsim')
    let nao = document.getElementById('txtnao')
    let resp = document.getElementById('res')

    if (i == '') {
        alert('Digite uma idade válida')
        return
    }

    if (!sim.checked && !nao.checked) {
        alert('Selecione se possui carteira ou não')
        return
    }

    let idade = Number(i)

    if (idade < 18 && nao.checked) {
        resp.innerHTML = 'Não tem idade e nem carteira para dirigir'
    } else if (idade < 18 && sim.checked) {
        resp.innerHTML = 'Possui carteira, mas não tem idade para dirigir'
    } else if (idade == 18 &&  sim.checked){
        resp.innerHTML = 'Tem exatamente 18 anos e tem carteira'
    } else if (idade >= 18 && nao.checked) {
        resp.innerHTML = 'Tem idade suficiente, mas não possui carteira para dirigir'
    } else {
        resp.innerHTML = 'Tem idade suficiente e carteira para dirigir'
    }
}