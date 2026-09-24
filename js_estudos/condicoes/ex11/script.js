function verificar() {
    let senhacerta = "1234"
    let login = "admin"
    let usuario = document.getElementById('txtlogin').value
    let senha = document.getElementById('txtsenha').value
    let resp = document.getElementById('res')

    if (usuario === login && senha === senhacerta) {
        resp.innerHTML = 'Login realizado com sucesso!'

    } 
    else if(usuario === login && senha !== senhacerta) {
        resp.innerHTML = 'Senha incorreta!'

    } 
    else if(usuario !== login && senha === senhacerta) {
        resp.innerHTML = 'Usuário incorreto!'

    } 
    else {
        resp.innerHTML = 'Usuário e senha incorretos!'
    }
}