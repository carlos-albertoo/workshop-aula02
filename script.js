alert("Ola mundo");

const numeroAleatorio = Math.floor(Math.random()* 10) +1;

let chute = Number(prompt("Mini Game Número Secreto!!"));
let tentativas = 1;

console.log(numeroAleatorio);

while (chute !== numeroAleatorio){
    if (chute > numeroAleatorio){
        chute = Number(
            prompt("O número secreto é Maior! Tente novamente:"),
        );
    } else {
        chute = Number(
            prompt("O número secreto é Menor! Tente novamente:"),
        );
    }

    tentativas++;
}

alert(`Parabéns! Você acertou o número secreto ${tentativas} tentativas!`);
    