let lista = [12, -5, 8, -3, 0, 15, -9, 4, -1]
let positivos = []
let negativos = []
for (let i in lista) {
    if (lista[i] < 0) {
        negativos.push(lista[i])
    }
    else {
        positivos.push(lista[i])
    }
}
console.log(`A lista de negativos é ${negativos}`)
console.log(`A lista de positivos é ${positivos}`)
console.log(`Ao todo, há ${negativos.length} números negativos e ${positivos.length} números positivos`)