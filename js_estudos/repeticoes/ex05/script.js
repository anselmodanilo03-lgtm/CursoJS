const readline = require('readline')

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tentativa = 0
let senha = '1234'

function login() {
    entrada.question('Digite sua senha: ', (senhaDigitada) => {
        if (senhaDigitada === senha) {
            console.log('Login realizado com sucesso!')
            entrada.close()
        } else {
            tentativa++

            if (tentativa < 3) {
                console.log('Senha incorreta!')
                login()
            } else {
                console.log('Acesso bloqueado!')
                entrada.close()
            }
        }
    })
}

login()