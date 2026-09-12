function verificar() {
    let num1 = document.getElementById('txtnum1').value
    let num2 = document.getElementById('txtnum2').value
    let num3 = document.getElementById('txtnum3').value
    let resp = document.getElementById('res')

    if (num1 == '' || num2 == '' || num3 == '') {
        alert('Digite os três números')
        return
    } 

    let valor1 = Number(num1)
    let valor2 = Number(num2)
    let valor3 = Number(num3)
    
    if (valor1 >= valor2 && valor1 >= valor3) {
        resp.innerHTML = `O maior é o primeiro número, <strong>${num1}</strong>`
    } else if (valor2 >= valor1 && valor2 >= valor3) {
        resp.innerHTML = `O maior é o segundo número, <strong>${num2}</strong>`
    } else {
        resp.innerHTML = `O maior é o terceiro número, <strong>${num3}</strong>`
    }
}