let lista_notas = [7, 8, 5, 10, 6]
let total = 0
for (let i = 0; i < lista_notas.length; i++) {
    total += lista_notas[i]
}
console.log(`A média da turma é ${total / lista_notas.length}`)