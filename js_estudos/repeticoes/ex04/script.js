function verificar() {
    let resp = document.getElementById('res')
    resp.innerHTML = ''

    for(let i = 1; i <= 100; i++) {

        
        if (i % 3 == 0 && i % 5 == 0) {
            resp.innerHTML += `<strong>FizzBuzz</strong> `
        } 
        else if (i % 3 == 0) {
            resp.innerHTML += `<strong>Fizz</strong> `
        } 
        else if (i % 5 == 0) {
            resp.innerHTML += `<strong>Buzz</strong> ` 
        }
        else {
            resp.innerHTML += `${i} `
        }
    }
}