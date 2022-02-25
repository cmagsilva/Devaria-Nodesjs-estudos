const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua Idade:', input => { 
    leituraDeCampo = input;
    console.log( `o usuario digtou: ${leituraDeCampo}`);
});