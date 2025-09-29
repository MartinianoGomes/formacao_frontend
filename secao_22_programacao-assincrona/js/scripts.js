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
// O método resolve do objeto Promise resolve instruções. Você pode receber e tratar o resultado destas instruções
// com o método then. Encadeando o método cath logo após o then, você pode tratar algum erro que venha ocorrer com o
// método then. Lembre-se de disparar um Error para que o método catch consiga interceptar o erro.
// Promise.resolve(4 * 'asd')
//     .then((n) => {
//         if (Number.isNaN(n)) {
//             throw new Error("Valores inválidos!");
//         }
//     })
//     .catch((err) => console.log(`Um erro ocorreu: ${err}`))




// Reject nas promises
// O conseito de reject em promises nos ajuda a controlar a saída do tratamento de erros em promises.
// Caso a promise consiga ser resolvida, bem. Caso não consiga ser resolvida, a promise é estancada e encerrada
// com o método reject.
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10.`);
        } else {
            reject(new Error(`Número muito baixo.`));
        }
    })
}

let a = checkNumber(20);
let b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => { console.log(`Um erro ocorreu: ${err}`) });
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => { console.log(`Um erro ocorreu: ${err}`) });