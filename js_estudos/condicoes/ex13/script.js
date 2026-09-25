function verificar() {
    let n = Number(document.getElementById('txtnum').value)
    let resp = document.getElementById('res')

    if (n % 3 == 0 && n % 5 == 0) {
        resp.innerHTML = '<strong>FizzBuzz</strong>'
    } 
    else if (n % 3 == 0) {
        resp.innerHTML = '<strong>Fizz</strong>'
    } 
    else if (n % 5 == 0) {
        resp.innerHTML = '<strong>Buzz</strong>'
    } 

    else {
        resp.innerHTML = n
    }
}