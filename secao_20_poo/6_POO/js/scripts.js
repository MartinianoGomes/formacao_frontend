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

// Getters e Setters
export class Conta {
    constructor(email, senha) {
        this._email = email;
        this._senha = senha;
    }

    get email() {
        return this._email;
    }

    set email(novoEmail) {
        this._email = novoEmail;
    }

    get senha() {
        return this._senha;
    }

    set senha(novaSenha) {
        this._senha = novaSenha;
    }

    login() {
        return 'Você está logado!'
    }
}

let bd = [];

export function cadastrar(email, senha) {
    let conta = new Conta(email, senha);

    bd.push(conta);

    console.log(bd);
}


// Herança - extends
export class ContaPoupanca extends Conta {
    constructor(email, senha, saldo) {
        super(email, senha);
        this._saldo = saldo;
    }
}