function ehprimo(n) {
    for (let i = 0; i <= n; i++) {
        n % i
        if (n % i === 0) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(ehprimo(7))  
console.log(ehprimo(10))  
console.log(ehprimo(2))  
console.log(ehprimo(1))   
console.log(ehprimo(0))   
console.log(ehprimo(97))