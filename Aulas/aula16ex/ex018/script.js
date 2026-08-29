function adicionar() {
    let num = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    let tab = document.getElementById('seltab')
    let array = num.push(num)

    if (num.length == 0  || num < 1 || num > 100 || num == array) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        let item = document.createElement('option')
        item.text += `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
}