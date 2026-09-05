function verificar() {
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2') 
    let resp = document.getElementById('res')

    if (Number(n1.value.length == '' || n2.value.length == '')) {
        window.alert('Digite um número válido')
    } else {
        let numero1 = Number(n1.value)
        let numero2 = Number(n2.value)

        if (maior > menor) {
            resp.innerHTML = `Entre o ${numero1} e o ${numero2}, o maior é ${numero1}`
        } else if (numero2 > numero1) {
            resp.innerHTML = `Entre o ${numero1} e o ${numero2}, o maior é ${numero2}`
        } else {
            resp.innerHTML = `Os dois números são iguais`
        }
    }
}
