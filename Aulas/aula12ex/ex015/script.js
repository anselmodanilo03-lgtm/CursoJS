function Verificar() {
    var agora = new Date()
    var ano_atual = agora.getFullYear
    var nasc = window.document.getElementById('nasc')
    var as = Number(nasc.value)
    var s = ano_atual - as
    res.innerHTML = `Detectamos um homem com ${s} anos`
}