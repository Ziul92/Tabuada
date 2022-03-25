function multiplicacao(num1, num2) {
    for(let i = 1; i <= num2; i++){
       criarElemento(`O resultado de ${num1} x ${i} é = ${(num1 * i)} ` )
       console.log(`O resultado de ${num1} x ${i} é = ${(num1 * i)} ` )
   }
 }
 
 function soma(num1, num2) {
    for(let i = 1; i <= num2; i++){
       criarElemento(`O resultado de ${num1} + ${i} é = ${(num1 + i)} `)
       console.log(`O resultado de ${num1} + ${i} é = ${(num1 + i)} `)
     }
 }
 
 function subtracao(num1, num2){
     for(let i = 1; i <= num2; i++){
       criarElemento(`O resultado de ${num1} - ${i} é = ${num1 - i}`)
       console.log(`O resultado de ${num1} - ${i} é = ${num1 - i}`)
     }
 }
 
 function divisao(num1, num2) {
     for(let i = 1; i <= num2; i++){
       criarElemento(`O resultado de ${num1} / ${i} é = ${(num1 / i).toFixed(4)} `)
 
       console.log(`O resultado de ${num1} / ${i} é = ${(num1 / i)} `)
     }
 }