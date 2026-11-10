function situação(média) {
    if (média >= 7) {
        return 'APROVADO!'
    }
    else if (média >= 5) {
        return 'EM RECUPERAÇÃO!'
    }
    else {
        return 'REPROVADO!'
    }
}

console.log(situação(8.5))
console.log(situação(7))    
console.log(situação(6))    
console.log(situação(3)) 