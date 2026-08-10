function verificar() {
    var senha_certa = 'cursoemvideo123'
    var senha = document.getElementById('senha').value
    var resp = document.getElementById('res')
    if (senha === senha_certa) {
        resp.innerHTML = 'Sua senha está <strong>CORRETA</strong>! Logando...'
    } else {
        resp.innerHTML = 'Sua senha está <strong>INCORRETA</strong>! Tente mais uma vez'
    }
}