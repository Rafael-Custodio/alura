console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 1');
console.log('==================');
console.log('\n');

//1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador < 11) {

    console.log(`Contando: ${contador}`);
    contador++;
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 1');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 2');
console.log('==================');
console.log('\n');

//2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorReverso = 10;
while (contadorReverso > -1 ) {

    console.log(`Contagem regressiva: ${contadorReverso}`);
    contadorReverso--;
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 2');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 3');
console.log('==================');
console.log('\n');

//3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let num = prompt('Digite um número de 1 a 50 para contagem regressiva:');

while (num > -1) {
    console.log(`Contagem regressiva: ${num}`);
        num--;
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 3');
console.log('==================');
console.log('\n');

console.log('\n');
console.log('==================');
console.log('INÍCIO DO EXERCÍCIO 4');
console.log('==================');
console.log('\n');

//4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let cont = 0;
let numProgre = prompt('Digite um número de 1 a 50 para contagem progressiva:');

while (cont <= numProgre) {
    console.log(`Contando: ${cont}`);
        cont++;
}

console.log('\n');
console.log('==================');
console.log('FIM DO EXERCÍCIO 4');
console.log('==================');
console.log('\n');
