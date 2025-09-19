// Função de expressão
function minhaFuncao() {
    console.log('Função de expressão');
}

minhaFuncao();

// Função anônima
const funcaoAnonima = function () {
    console.log('Função anônima');
};

funcaoAnonima();

// Função com parâmetros

const funcaoComParametros = function (a, b) {
    return a + b;
};
console.log(funcaoComParametros(2, 3));

// Função com valor padrão
const funcaoComValorPadrao = function (a = 1, b = 1) {
    return a + b;
}