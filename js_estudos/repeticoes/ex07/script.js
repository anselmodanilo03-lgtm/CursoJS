function verificar() {
    let num = Number(document.getElementById('txtn1').value)
    let resp = document.getElementById('res')

    for(let i = 2; i <= num; i++) {
        if (num % i == 0) {
            resp.innerHTML = `O número ${num} não é primo`
        }
        else {
            resp.innerHTML = `O número ${num} é primo`
        }
    }
}