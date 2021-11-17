let numeros = [1,5,6,4,7,8,1000,2000,3000];

console.log("Tamanho do array:" + numeros.length)
for(let i = 0;i <numeros.length;i++) {
    console.log("Conteudo do Indice:" + i + "=" + numeros[i]);
}

let nomes = [];
for(let i = 0; i<100;i++) {
    nomes.push("nome" + i );
}

console.log(nomes)

let html = "<ol>"

for(let i = 0;i<nomes.length;i++) {
    html += "<li>" + nomes[i] + "</li>"
}

html += "</ol>";

console.log(html);

let qtdPares = 0;
let qtdImpares = 0;

for(let i = 1; i <= 100;i++) {
    if(i % 2 == 0 ) {
        console.log("O número: " + i + " é par");
    } else {
        console.log("O número: " + i + " é impar")
    }
}

console.log("quantidade de pares: " + qtdPares);

console.log("quantidade de impares: " + qtdImpares);