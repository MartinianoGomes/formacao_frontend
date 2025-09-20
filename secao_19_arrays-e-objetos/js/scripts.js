// Array de objetos
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
]

// Método filter retorna um novo array com os elementos que passaram no teste
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

// Método includes verifica se o valor existe no array
if (posts.includes({ id: 1, title: "Primeiro Post", category: "JavaScript" })) {
    console.log("Existe");
}

// Método reverse
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.reverse());

// Método trim
const nome = "   Wallace 65  ";
console.log(nome.trim());

// Método split
const nome2 = "Wallace, Maria, Luiz, Eduardo";
const nomes = nome2.split(", ");
console.log(nomes);

// Método join
const nome3 = nomes.join(", ");
console.log(nome3);