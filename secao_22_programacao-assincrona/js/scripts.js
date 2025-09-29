// Função setTimeout
// console.log("Programa ainda não ecexutou.");

// setTimeout(() => {
//     console.log("Requisição assíncrona.");
// }, 2000);

// console.log("Programa ainda não ecexutou. 2");



// Função setInterval
// console.log("Programa ainda não ecexutou.");

// setInterval(() => {
//     console.log("Intervalo assíncrono.");
// }, 3000);

// console.log("Programa ainda não ecexutou. 2");



// Promises
// let somatorioAssincrono = Promise.resolve(() => { 5 + 5 });

// somatorioAssincrono
//     .then((value) => {
//         console.log(`A soma é ${value}`);
//         return value;
//     })
//     .then((value) => {
//         value - 1;
//     })
//     .then((value) => {
//         console.log(`Agora é ${value}`);
//     })

// Tratamento de erros nas Promises

Promise.resolve(4 * 'asd')
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores inválidos!");
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`))