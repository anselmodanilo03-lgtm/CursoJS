let lista = [5, 8, 9, 4, 3, 66, 22, 100]
let maior = lista[0]
let menor = lista[0]
let soma = 0
for (let i in lista) {
    soma += lista[i]
    if (lista[i] > maior) {
        maior = lista[i]
    }
    if (lista[i] < menor) {
        menor = lista[i]
    }
}
let media = soma / lista.length
console.log(`Ao todo temos ${lista.length} números cadastrados.`)
console.log(`O maior valor informado foi ${maior}.`)
console.log(`O menor valor informado foi ${menor}.`)
console.log(`Somando todos os valores, temos ${soma}.`)
console.log(`A média dos valores digitados é ${media}`)