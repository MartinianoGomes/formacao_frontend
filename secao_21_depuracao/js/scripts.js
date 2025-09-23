// Depurando com console.log
// Depurando com console.error
// Depurando com console.table
// Depurando com console.time e console.timeEnd
// Depurando com debugger
for (i = 0; i < 10; i++) {
    let a = 10;
    a += i;

    console.log(a);
    console.log(i);
}

// Debugger
function funcao1() {
    console.log('Inicio da função 1');
    funcao2();
    console.log('Fim da função 1');
}

debugger;

function funcao2() {
    console.log('Inicio da função 2');
    console.log('Fim da função 2');
}

// Tratamento de dados por função
function checkNumber(number) {
    let result = Number(number);

    if (Number.isNaN(result)) {
        console.error('O valor deve ser um número');
    }

    console.log(`Sucesso! O número é ${result}.`);

    return result;
}

checkNumber('a');
checkNumber(10);
checkNumber('20');