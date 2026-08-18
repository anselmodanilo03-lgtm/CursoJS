function gerar() {
    var tabuada = Number(document.getElementById('tabu').value)
    var resp = document.getElementById('res')
    resp.innerHTML = ''
    if (tabuada == '') {
        window.alert('Por favor, digite um número!')
    } else {
        for (var c = 1; c <= 10; c++) {
            var mult = tabuada * c
            resp.innerHTML += `${tabuada} x ${c} = ${mult}<br>`
            resp.style.padding = '0px'
        }
    }
}