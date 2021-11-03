//declarando a função

function comprarComida(quantidade){
    console.log(quantidade);
    const preco = quantidade * 12;
    return preco;
}

function darDesconto(preco){
    const desconto = preco * 0.7;
    return desconto;
}

//chamando a função
const retornoPreco = comprarComida(2);
//const desconto = darDesconto(preco);
console.log("Preco inicial:" + retornoPreco + "Preco com desconto:" + darDesconto(comprarComida(2)));