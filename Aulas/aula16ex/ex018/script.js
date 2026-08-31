let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let resp = document.getElementById('res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
        let item = document.createElement('option')
        item.text += `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
}
