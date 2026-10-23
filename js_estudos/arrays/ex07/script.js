let lista = [3, 123, 65, 9, 2, 100, 5]
let dobro = []
for (let i in lista) {
    dobro.push(lista[i] * 2)
}
console.log(`Lista original: ${lista} `)
console.log(`Lista dobrada: ${dobro}`)