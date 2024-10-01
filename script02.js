//baseado no comando que for informado, mostrar a lampada ligada ou desligada

const comando = prompt("Informe o comando para a lampada (Ligar/desligar)")

const elementoImagem = document.createElement("img")

switch (comando.toLocaleLowerCase()) {
    case "ligar":
        elementoImagem.src = "./assets/ligada.png"
        break;

    case "desligar":
        elementoImagem.src = "./assets/desligada.png"
        break;
    default:
        break;
}
if (elementoImagem.src != null) {
    document.body.appendChild(elementoImagem)
}

