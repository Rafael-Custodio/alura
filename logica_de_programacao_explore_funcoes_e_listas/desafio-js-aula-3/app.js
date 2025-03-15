// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let imc;
let valorDuasCasas;
function calcularIMC(altura, peso){
    imc = peso / (altura * altura);

    valorDuasCasas = imc.toFixed(2);
  }

  calcularIMC(1.66, 93);
  alert(`O IMC é: ${valorDuasCasas}`);


  // 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

  function calculoFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculoFatorial(n-1);
}

alert(calculoFatorial(5));


// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolar(dolar) {
    let real = dolar * 4.8;
    let mensagem = `O valor em reais: R$ ${real}.`
    return mensagem;    
}

alert(converterDolar(7.8));
  

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calculoArea(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    let mensagem = `A área da sala é de ${area}m², e o perimetro é de ${perimetro}m`;
    return mensagem;
}

alert(calculoArea(59.5, 8.6));


// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculoAreaCirculo(r) {
    let area = 3.14 * (r*r);
    let perimetro = 2 * 3.14 * r;
    let mensagem = `A área do círculo é de ${area}m², e o perimetro ${perimetro}m`;
    return mensagem;
}

alert(calculoAreaCirculo(9));


// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(n) {
    for (let i=1; i <= 10; i++) {
        console.log(n * i);
    }
}

tabuada(10);

