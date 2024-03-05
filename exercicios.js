/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?
*/
  const indice = 13
  let SOMA = 0
  let K = 0

  while (K < indice){
    K += 1
    SOMA +=K
  }
  console.log(SOMA)
//Resposta: A soma é 91.

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
valor sempre será a soma dos 2 valores anteriores
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
pertence ou não a sequência.
*/
const userNumber = 34
const fibonacciNumbers = [0,1]

while(fibonacciNumbers[fibonacciNumbers.length-1] < userNumber){
  let acm = 0
  fibonacciIndex = fibonacciNumbers.length - 1
  acm = acm + fibonacciNumbers[fibonacciIndex] + fibonacciNumbers[fibonacciIndex - 1]
  fibonacciNumbers.push(acm)
}

if (fibonacciNumbers.includes(userNumber)){
  console.log(`${userNumber} é um número da sequência de Fibonacci.`)
}else{
  console.log(`${userNumber} NÃO é um número da sequência de Fibonacci.`)
}

/*3) Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, ___                 Resposta: 9

b) 2, 4, 8, 16, 32, 64, ____       Resposta: 128

c) 0, 1, 4, 9, 16, 25, 36, ____    Resposta: 49

d) 4, 16, 36, 64, ____             Resposta: 100

e) 1, 1, 2, 3, 5, 8, ____          Resposta: 13

f) 2,10, 12, 16, 17, 18, 19, ____  Resposta: 200
*/



/*4) Você está em uma sala com três interruptores, cada um conectado
a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala
em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Resposta 1: Existe um contexto oculto à ser considerado que é: Alguma das lâmpadas da sala ao lado já está acesa? ou posso considerar como todas desligadas?
pensando nisso, considerando que todas estão apgadas, eu faria o seguinte: acionaria o interruptor 1 e checaria qual lampada acendeu;
então eu voltaria à sala dos interruptores e acionaria o interruptor 2 e verificaria qual lampada acendeu. Dessa forma, agora eu sei de quais
lâmpadas esses 2 interruptores pertencem. o último interruptor eu sei que pertence à ultima lâmpada apagada, pois foi a última que restou.

Resposta 2: Uma outra possibilidade realista que pode ou não ser válida é utilizar a temperatura das lâmpadas como referência. Considerando que
todas as lâmpadas estão apagadas eu faria o seguinte: Na sala do interruptor, acionaria o 1° interruptor e deixaria a lampada ligada
por 1 minuto e logo em seguida desligaria. Em seguida eu deixaria o interruptor 2 permanentemente ligado, e por fim eu ignoraria o último interruptor.
Quando eu entrasse na sala eu veria o seguinte: 1 lâmpada ligada e 2 desligadas. a lâmpada ligada eu sei à qual interruptor pertence, pois foi o único
interruptor que deixei permanentemente ligado, em seguida eu colocaria minha mão nas 2 lâmpadas apagadas e verificaria qual está quente. A que estiver
quente, eu saberei que pertence ao 1° interruptor que eu liguei por 1 minuto e desliguei. a última lâmpada que estiver mais fria, por fim, eu saberei
que pertence ao único interruptor que eu nem toquei. Dessa forma, eu precisaria ir até a sala das lâmpadas apenas 1 única vez.

PS: não detalharei como eu resolveria esse problema na situação onde alguma (ou todas) as lampadas poderiam estar acesas, pois dependendo de quais
lampadas estão acesas ou não e também dependendo do fato se a pessoa sabe (ou não) quais lâmpadas estão acesas, as possibilidades de resolver esse
problema poderiam ser muito amplas.
*/

//5) Escreva um programa que inverta os caracteres de um string.

const userText = "hamburger"
const textArray = userText.split('')
const letters = []

for(i = 1; i < textArray.length + 1; i++){
  switchLetter = ""
  switchLetter += textArray[textArray.length - i]
  letters.push(switchLetter)
  
}
console.log(letters.join(''))



