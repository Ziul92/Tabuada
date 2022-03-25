const botao = document.querySelector("#botao")
let valor = document.querySelector("#valor")



botao.addEventListener("click", function(evento) {
   evento.preventDefault()
   valor.innerHTML = " "

   fazerContas()

})






//multiplicacao(5, 10)

//soma(10, 10)

//subtracao(10,10)

//divisao(10,10)

//Num1 vai ser o 1º numero da tabuada
//Num2 vai ser até quando queremos a tabuada

