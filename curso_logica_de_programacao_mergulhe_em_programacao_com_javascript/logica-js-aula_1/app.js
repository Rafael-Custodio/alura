alert('Boas vindas ao jogo do número secreto');


let numeroSecreto = 9;
console.log('Número secreto', numeroSecreto);

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('Valor do número secreto:', numeroSecreto);
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
}else{

    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('Você errou :(');
}