const listaArgumentos = process.argv.slice(2);

console.log ('-----------------Execultando um FOR-----------------');
for(let controladorfor = 0; controladorfor < listaArgumentos.length; controladorfor++){
    console.log(`Posicao ${controladorfor} valor lido = ${listaArgumentos[controladorfor]}`);
}

console.log ('-----------------Execultando um WHILE-----------------');
let controladorwhile = 0; 
while(controladorwhile < listaArgumentos.length){
    console.log(`Posicao ${controladorwhile} valor lido = ${listaArgumentos[controladorwhile]}`);
    controladorwhile++;
}

console.log ('-----------------Execultando um DOWHILE-----------------');
let controladordowhile = 0; 
do{
    console.log(`Posicao ${controladordowhile} valor lido = ${listaArgumentos[controladordowhile]}`);
    controladordowhile ++;
}while(controladordowhile < listaArgumentos.length);

console.log ('-----------------Execultando um FOR OF-----------------');

for(const argumento of listaArgumentos){
    console.log(`valor lido = ${argumento}`);
}