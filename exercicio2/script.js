// # Exercício 2

// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let tabuada = Number (prompt(`Digite um numero para a tabuada: `))

for (let i = 1; i <11; i++) {

    console.log(` A tabuada de ${tabuada} x ${i} é ${tabuada*i}`)
}
  
 
 // 1 Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```