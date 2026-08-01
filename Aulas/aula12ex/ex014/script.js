function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.getElementById("msg")
    var img = document.getElementById('foto')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd9f'
        img.src = 'amanhecer.jpg'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#b9846f'
        img.src = 'entardecer.jpg'
    } else {
        document.body.style.background = '#515154'
        img.src = 'noite.jpg'
    }
}