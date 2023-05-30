// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

let coxinha = prompt("Você deseja comer mais uma coxinha? responda S ou N")
let conta = 0

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

while (coxinha.toLocaleUpperCase() === "S") {
 conta = conta + 2.50
    coxinha = prompt("Deseja mais coxinhas? S ou N")
       
}

console.log(`O valor total é ${conta}`);