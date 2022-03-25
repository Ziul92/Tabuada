function fazerContas() {
    let num1 = document.querySelector("#num1").value
    let num2 = document.querySelector("#num2").value
    let contas = document.querySelector("#contas").value
 
    if(contas === "multiplicacao"){
       multiplicacao(num1, num2)
    } else if (contas === "soma") {
       soma(Number(num1), Number(num2))
    } else if (contas === "divisao") {
       divisao(num1, num2)
    } else if (contas === "subtracao") {
       subtracao(num1, num2)
    }
 }