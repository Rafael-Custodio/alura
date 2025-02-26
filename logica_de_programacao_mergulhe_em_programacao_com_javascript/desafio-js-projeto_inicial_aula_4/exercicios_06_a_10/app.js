console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 6');
console.log('==================');
console.log('\n');

//6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 7;
let valor2 = 3;
let resultado;

resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 6');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 7');
console.log('==================');
console.log('\n');

//7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Qual é a sua idade ?');

if (idade >= 18) {
    console.log(`Com ${idade} anos, você é maior de idade.`)
} else {
    console.log(`Com ${idade} anos, você NÃO é maior de idade.`)
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 7');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 8');
console.log('==================');
console.log('\n');

//8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número qualquer, positivo ou negativo:');

if (numero > 0) {
    alert(`O número digitado foi o número ( ${numero} ) e ele é um número positivo.`);   
} else if (numero == 0) {
    alert(`O número digitado foi o número ( ${numero} ) e ele é um número nulo ( 0 ).`);
} else {
    alert(`O número digitado foi o número ( ${numero} ) e ele é um número negativo.`);    
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 8');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 9');
console.log('==================');
console.log('\n');

//9 - Use um loop while para imprimir os números de 1 a 10 no console.
let numeros = 1;

while (numeros <= 10) {
    console.log(`Contando: ${numeros}`);
    numeros++;    
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 9');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 10');
console.log('==================');
console.log('\n');

//10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8;

if (nota>= 7) {
    console.log('Aprovado!');   
} else {
    console.log('Reprovado!');    
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 10');
console.log('==================');
console.log('\n');

