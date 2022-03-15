// Variáveis
// É algo variável, é algo que pode ser modificado durante o código
// Não utilize VAR, utilize LET.

let nome = 'Ramon'; // String


console.log(nome, 'nasceu em 1987.');
console.log('Em 2021', nome, 'conheceu Lorrana.');
console.log(nome, 'casou-se com a Lorrana em 2022.');
console.log('Lorrana teve 1 filho com', nome, 'em 2023.');
console.log('O filho de', nome, 'se chama Betina.');


// Pode modificar a variável ao longo do código também
let nome; // Declarou a variável
nome = 'Ramon'; // Inicializando a variável
console.log(nome);
nome = 'Lorrana';
console.log(nome);


// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos

// Exemplo
let nomeCliente = 'João';
console.log(nomeCliente);


// Não pode começar o nome de uma variável com o um número

// Exemplo 
let 1nome;

// Não podem conter espaços ou traços

//Exemplo
let nome-Cliente;
let nome cliente;

// Variáveis com nome compostos / Utilizamos camelCase , segunda letra em diante começa com letra maiúscula
// Case-sensitive - Letra Maiúscula ou minúscula fazem diferença (mas pode usar as duas)
let nomeCompletoDoCliente = 'Ramon Santos'
let nomecompletodocliente = 'Lorrana'
