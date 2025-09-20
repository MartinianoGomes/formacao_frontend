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


// Percorre o array e retorna o índice e o valor
const posts = [
    { id: 1, title: "Primeiro Post", category: "JavaScript" },
    { id: 2, title: "Segundo Post", category: "JavaScript" },
    { id: 3, title: "Terceiro Post", category: "JavaScript" },
    { id: 4, title: "Quarto Post", category: "JavaScript" },
    { id: 5, title: "Quinto Post", category: "JavaScript" },
    { id: 6, title: "Sexto Post", category: "JavaScript" },
]

posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}. Categoria: ${post.category}`);
})