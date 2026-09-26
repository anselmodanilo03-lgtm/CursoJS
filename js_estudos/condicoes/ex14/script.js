function verificar() {
    let senha = document.getElementById('txtsenha').value
    let resp = document.getElementById('res')
    let temMaiuscula = false
    let temMinuscula = false
    let temNumero = false
    let temEspecial = false
    const especiais = '!@#$%&*'

    // Percorre TODOS os caracteres 

    for (let caractere of senha) {
        if (caractere >= 'A' && caractere <= 'Z') {
            temMaiuscula = true
        }
        if (caractere >= 'a' && caractere <= 'z') {
            temMinuscula = true
        }
        if (caractere >= '0' && caractere <= '9') {
            temNumero = true
        }
        if (especiais.includes(caractere)) {
            temEspecial = true
        }
    }

    // Monta a lista do que está faltando
    let faltando = []

    if (senha.length < 8) {
        faltando.push('mínimo de 8 caracteres')
    }
    if (!temMaiuscula) {
        faltando.push('letra maiúscula')
    }
    if (!temMinuscula) {
        faltando.push('letra minúscula')
    }
    if (!temNumero) {
        faltando.push('número')
    }
    if (!temEspecial) {
        faltando.push('caractere especial (!@#$%&*)')
    }

    // Resultado final
    if (faltando.length === 0) {
        resp.innerHTML = '<strong>Senha forte!</strong>'
    } else {
        resp.innerHTML = `Senha fraca. Falta: <strong>${faltando.join(', ')}</strong>`
    }
}