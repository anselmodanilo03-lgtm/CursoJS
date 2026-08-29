function gerar() {
    let valor = Number(document.getElementById('tabu').value)
    let tabuada = Number(valor)
    let tab = document.getElementById('seltab')

    if (valor.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${tabuada} x ${c} = ${tabuada * c}`
            tab.appendChild(item)
        }
    }
}