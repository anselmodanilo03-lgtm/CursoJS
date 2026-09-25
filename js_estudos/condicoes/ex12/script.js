function verificar() {
    let n1 = document.getElementById('txtnota1').value
    let n2 = document.getElementById('txtnota2').value
    let n3 = document.getElementById('txtnota3').value
    let resp = document.getElementById('res')

    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)

    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert('As notas precisam ser entre 0 e 10')
        return
    } else {

        let media = (nota1 + nota2 + nota3) / 3
  
        if (media >= 9) {
            resp.innerHTML = 'Sua nota foi <strong>Excelente!</strong>'
        } 
        else if (media >= 7) {
            resp.innerHTML = 'Você tirou uma nota <strong>Boa!</strong>'
        } 
        else if (media >= 5) {
            resp.innerHTML = 'Precisa se esforçar um pouco mais, sua nota foi <strong>Regular!</strong>'
        } else {
            resp.innerHTML = 'Infelizmente, você foi <strong>Reprovado!</strong>'
        }
    }
}