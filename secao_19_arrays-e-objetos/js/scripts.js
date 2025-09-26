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

// Método reverse - inverte a ordem dos elementos do array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.reverse());

// Método trim - remove os espaços em branco do início e do fim da string
const nome = "   Wallace 65  ";
console.log(nome.trim());

// Método split -  divide a string em um array
const nome2 = "Wallace, Maria, Luiz, Eduardo";
const nomes = nome2.split(", ");
console.log(nomes);

// Método join - junta os elementos do array em uma string
const nome3 = nomes.join(", ");
console.log(nome3);

// Rest operator - junta os elementos do array em uma string
const turmaA = ["Wallace", "Maria", "Luiz"];
const turmaB = ["Eduardo", "Letícia", "Rosana", "Wallace"];

const turmaUnida = [...turmaA, ...turmaB];
console.log(turmaUnida);

// Outro exemplo de rest operator
const somaInfinita = (...numeros) => {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// For of - percorre os elementos do array
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Finally
try {
    let value = Number(turmaA);

    if (!value) {
        throw new Error("Valores inválidos!");

    }
} catch {
    console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
    console.log("O programa foi executado!")
}