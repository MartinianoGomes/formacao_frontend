// 1 - Objetos

const pessoa = {
    nome: 'Martiniano',
    sobrenome: 'Gomes',
    idade: 21,

    olaMundo() {
        return 'Olá mundo!'
    }
}

console.log(pessoa.nome) // Retornará o nome do objeto.
console.log(pessoa.sobrenome) // Retornará o sobrenome do objeto.
console.log(pessoa.olaMundo()) // Retornará a string 'Olá mundo!'.