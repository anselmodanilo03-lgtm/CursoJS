function contagem() {
    var comeco = Number(document.getElementById('inicio').value)
    var final = Number(document.getElementById('fim').value)
    var passos = Number(document.getElementById('passo').value)
    var resp = document.getElementById('res')

    if (comeco.length == 0) {
        resp.innerHTML = 'Impossível contar!'

    } else if (passos <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        
    } else if(comeco > final) {
        resp.innerHTML = 'Contando: <br> '
        for (var c = comeco; c >= final; c -= passos) {
            resp.innerHTML += `${c} ↣ `
        } 

    } else {
        resp.innerHTML = 'Contando: '
        for (var c = comeco; c <= final; c += passos) {
            resp.innerHTML += `${c} ↣ `
            }
        }
    resp.innerHTML += '🏁'
}