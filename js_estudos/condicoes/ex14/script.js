function verificar() {
    let senha = document.getElementById('txtsenha').value
    let resp = document.getElementById('res')

    if (senha.length < 8) {
        resp.innerHTML = 'A senha precisa ter no mínimo 8 caracteres'
    } else if (senha.toUpperCase() != senha) {
        resp.innerHTML = 'Falta letra maiúscula'
    }
}