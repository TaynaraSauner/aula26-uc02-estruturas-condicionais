//DOM - Document Object Model
const dividendo = Number(prompt("Informe o dividendo"))
const divisor = Number(prompt("Informe o divisor"))

console.log(`Dividendo ${dividendo}`)
console.log("Divisor" + divisor)

let resultado = 0

//Se o valor do divisor igual a zera, não faz o calculo .
//Se  não pode seguir com o calculo.


if (divisor != 0) {
    resultado = dividendo / divisor
}
else {
    resultado = 1
}
const mensagem = `A divisão de ${dividendo} por ${divisor} e igual a ${resultado}`

const elementoMensagem = document.createElement("h1")
//<h1> mensagem </h1>
elementoMensagem.textContent = mensagem
document.body.appendChild(elementoMensagem)


