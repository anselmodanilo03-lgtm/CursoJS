let lista = [7, 2, 19, 23, 46, 12, 0, 99]
let pares = []
let impares = []
for (let i in lista) {
    if (lista[i] % 2 == 0) {
        pares.push(lista[i])
    } 
    else if (lista[i] % 2 != 0) {
        impares.push(lista[i])
    }
}
console.log(`Números pares: ${pares}`)
console.log(`Números ímpares: ${impares}`)
console.log(`Total de pares: ${pares.length}`)
console.log(`Total de ímpares: ${impares.length}`)
