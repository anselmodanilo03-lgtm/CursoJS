function fatorial(n) {
    let resul = 1
    for (let i = resul; i <= n; i++) {
        resul = i * resul
    }
    return resul
}

console.log(fatorial(5))
console.log(fatorial(3))  
console.log(fatorial(1))  
console.log(fatorial(0))