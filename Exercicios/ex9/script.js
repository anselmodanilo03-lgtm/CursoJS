function Verificar() {
    var valor = Number(document.getElementById('compra').value)
    var resp = document.getElementById('res')
    if (valor > 300) {
        resp.innerHTML =  `Sua compra de R$${valor} terá frete <strong>GRÁTIS</strong>!`
    } else {
        resp.innerHTML = `Sua compra de R$${valor} terá frete de <strong>R$20</strong>`
    }
}