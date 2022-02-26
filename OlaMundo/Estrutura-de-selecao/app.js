const readLine = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart');
console.log('Alem de suas verificacoes, precisamos verificar se voce esta presente na lista do horario');

readLine.question('Qual o ano de seu nascimento: ', ano =>{
    if(ano>2004){
        console.log('Voce nao tem 18 anos')
    }else{
        readLine.question('Voc tem habilitacao? (Sim/Nao): ', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce nao tem habilitacao para entrar no kart');
            }else{
                readLine.question('Qual o seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao kart');
                            break;
                        case 'Carlos Magno' :
                            console.log('Bem vindo ao kart');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lisa de presenca')
                    }
                })
            }
        })
    }
})