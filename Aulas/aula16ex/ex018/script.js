function adicionar() {
    let num = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')
    let tab = document.getElementById('seltab')

    if (num.length == 0) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else if (tab.length == '') {
        window.alert('Adicione valores antes de finalizar!')
    } else {
       
    }
}