//1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaAtual = prompt('Qual dia da semana é hoje ?');

if (diaAtual == 'Sábado' || diaAtual == 'Sabado' || diaAtual == 'sábado' || diaAtual == 'sabado' || diaAtual == 'Domingo' || diaAtual == 'domingo'){
    alert(`Hoje é ${diaAtual}, portando, Bom fim de semana!`);
} else {
    alert(`Hoje é ${diaAtual}, portando, Boa semana!`);
}


//2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroEscolhido = prompt('Digite um número qualquer, positivo ou negativo:');

if (numeroEscolhido > 0) {
    alert(`O número digitado foi o número ( ${numeroEscolhido} ) e ele é um número positivo.`);   
} else if (numeroEscolhido == 0) {
    alert(`O número digitado foi o número ( ${numeroEscolhido} ) e ele é um número nulo.`);
} else {
    alert(`O número digitado foi o número ( ${numeroEscolhido} ) e ele é um número negativo.`);    
}


//3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontos = prompt('Quantos pontos você fez no jogo ?');

if (pontos >= 100) {
    alert('Parabéns, você venceu!');    
} else {
    alert('Tente novamente para ganhar.');    
}


//4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$ ${saldoConta},00 reais.`);

//5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual o seu nome ?');
alert(`Oi ${nome}, seja muito bem vindo(a).`);
