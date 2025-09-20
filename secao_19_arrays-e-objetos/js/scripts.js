// Array Filter
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50);

const pessoasTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})

// Slice
console.log(pessoasTerminaComA);

const pessoasComNomeGrande2 = pessoas.filter(obj => {
    return obj.nome.length >= 5;
}).slice(0, 2);

// Foreach
console.log(pessoasComNomeGrande2);

pessoasComNomeGrande2.forEach(obj => {
    console.log(obj.nome);
});