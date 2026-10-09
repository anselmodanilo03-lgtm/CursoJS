function verificar() {
    let num = Number(document.getElementById('txtn1').value)
    let resp = document.getElementById('res')
    let primo = true   // começa assumindo que é primo

    if (num <= 1) {
        primo = false
    } else {
        for (let i = 2; i < num; i++) {   // vai até num - 1
            if (num % i == 0) {
                primo = false
                break   // já encontrou divisor, pode parar
            }
        }
    }

    if (primo) {
        resp.innerHTML = `O número ${num} é primo`
    } else {
        resp.innerHTML = `O número ${num} não é primo`
    }
}