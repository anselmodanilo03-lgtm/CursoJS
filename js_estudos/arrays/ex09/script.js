let lista = [5, 8, 5, 2, 9, 5, 3, 8, 1]
let posicoes = []
for (let i in lista) {
    if (lista[i] == 5) {
        posicoes.push(i)
    }
}
console.log(`O número 5 aparece nas posições: ${posicoes}`)
console.log(`O número 5 aparece ${posicoes.length} vezes`)