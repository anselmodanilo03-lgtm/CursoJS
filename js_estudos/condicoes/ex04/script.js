function verificar() {
    let nota = Number(document.querySelector('input#txtnota').value)
    let resp = document.querySelector('div#res')

    if (nota >= 7) {
        resp.innerHTML = `O aluno com a nota ${nota} está <strong>APROVADO!</strong>`
    } else if (nota >= 5) {
        resp.innerHTML = `O aluno com a nota ${nota} está <strong>EM RECUPERAÇÃO</strong>`
    } else {
        resp.innerHTML = `O aluno com a nota ${nota} está <strong>REPROVADO</strong>`
    }
}