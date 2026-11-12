function contarVogais(texto) {
    let cont = 0
    texto = texto.toLowerCase()

    for (let i = 0; i < texto.length; i++) {
        if ('aeiou'.includes(texto[i])) {
            cont++
        }
    }
    return cont
}

console.log(contarVogais('banana'))
console.log(contarVogais('JavaScript'))  
console.log(contarVogais('xyz'))         
console.log(contarVogais('Aprovado')) 