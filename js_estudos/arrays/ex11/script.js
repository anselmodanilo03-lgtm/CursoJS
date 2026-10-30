let compras = [];

compras.push("Arroz");
compras.push("Feijão");
compras.push("Leite");
compras.push("Pão");
compras.push("Café");

console.log("Lista completa:");
console.log(compras);

compras.shift();

compras.unshift("Açúcar");

console.log("Lista atualizada:");
console.log(compras);

console.log("Quantidade de itens:", compras.length);