let lista = [8, 1, 7, 4, 2, 9]
console.log(`A lista completa é: ${lista}`)
console.log(`A lista possui ${lista.length} elementos`)
console.log(`O elemento da posição 0, é ${lista[0]} e da posição 3, é ${lista[3]}`)
lista.push(3)
lista.splice(7, 0, 11)
console.log(`A lista completa, com adição do 3 e 11 é: ${lista}`)