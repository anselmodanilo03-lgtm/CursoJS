function tabuada() {
    let tabuada = Number(document.getElementById('txtabu').value)
    let resp = document.getElementById('res')
    resp.innerHTML = ''

    for(let i = 1; i <= 10; i++) {
        resp.innerHTML += `${tabuada} x ${i} = ${tabuada * i} <br><br>`
    }
}