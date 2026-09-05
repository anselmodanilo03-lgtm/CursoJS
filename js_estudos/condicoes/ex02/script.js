function verificar() {
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2') 
    let resp = document.getElementById('res')

    if (Number(n1.value.length == '' || n2.value.length == '')) {
        window.alert('Digite um número válido')
    } else if (Number(n1.value > n2.value)) {
        resp.innerHTML = `O número ${n1.value} é maior que o número ${n2.value}`
    } else {
        resp.innerHTML = `O número ${n2.value} é maior que o número ${n1.value}`
    }
}
