let lista = [3, 5, 7, 9, 2]
for (let i = 0; i < lista.length; i++) {

    if (lista[i] == 7) {
        console.log(lista[i])
        console.log('Parabéns! Você acertou!')
        break
    }
    else {
        console.log(lista[i])
        console.log('Número incorreto!')
    } 

}