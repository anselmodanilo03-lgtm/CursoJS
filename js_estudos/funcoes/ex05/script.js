function fatorial(n) {
    if (n === 0) {
        return 1
    }
    else {
        for (let i = n ; i >= 0; i--) {
            let resul = n * i
            console.log(resul)
        }
    }
}

fatorial(0)
