/**
 * Aritméticos
 * + (Adição) / Concatenação -> '' unir dois valores
 * (-) Subtração (/) Divisão (*) Multiplicação (**) potenciação
 * (%) Resto da divisão
 */
/* ORDEM
() Tudo que for executando dentro de () vai ser executado primeiro
** Potenciação
* / %
+ -
=====================================================================
(++) pré Incremento = ++ pós
(--) Decremento = --
*/

// NaN - Not a number = É um error, (Deu algum erro na conta)





// *********************************************************************************************************************
// Variável - incremento (não pode usar numa constante - const), apenas let - executa a ação e depois ele faz o incremento do valor
// pós
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
contador++; // 6
contador++; // 7
contador++; // 8
contador++; // 9
contador++; // 10
console.log(contador);
// *********************************************************************************************************************




// *********************************************************************************************************************
// Também pode ser ++ antes - primeiro ele faz a conta e depois retorna o valor
// pré
let contador = 1;
++contador; // 2
++contador; // 3
++contador; // 4
console.log(contador);



// Também temos o decremento
let contador = 20;
--contador;
--contador; 
console.log(contador);



// incremento de mais de um valor
const passo = 15; 
let contador = 0;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
// *********************************************************************************************************************





// *********************************************************************************************************************
// Atalho para o contador - Operadores de atribuição
let contador = 2;
contador *= 2; 
contador *= 2; 
contador *= 2; 
console.log(contador);
// *********************************************************************************************************************



// *********************************************************************************************************************
const num1 = 10;
const num2 = parseInt('5'); // parseInt converte o número para inteiro. (converte a string entre aspas '5' de string para number)
console.log(num1 + num2);


const num1 = 10;
const num2 = parseFloat('5.2'); // parseFloat converte o número para flutuante. = Números com casas decimais (converte a string entre aspas '5' de string para number)
console.log(num1 + num2);

const num1 = 10;
const num2 = Number('5'); // Number faz a conversão de parseInt ou ParseFloat
console.log(num1 + num2);
// *********************************************************************************************************************



// *********************************************************************************************************************
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3); OBS; Desse jeito primeiro ele vai multiplicar pra depois somar
// *********************************************************************************************************************

// OBS: Para calcular uma conta em ordem devemos usar a precedencia EX: console.log((num1 + num2) * num3); OBS; Desse jeito ele vai primeiro somar e depois multiplicar usando ()