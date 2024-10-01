//if/ else if
//se/ senão se

const numeroMes = Number(prompt('Informe o número do mês'))

//Verifica se numeMes for 1, então o mês e Janeiro
//Senão, verifica se numeroMes for 2, então o mês e Fevereiro
//Senão,  verifica se numeroMes for 2, então o mês e Março ........

let numeroMesnomeMes = ""


if (numeroMes === 1) {
    nomeMes = "O mês informado foi Janeiro"
}
else if (numeroMes === 2) {
    nomeMes = "O mês informado foi Fevereiro"
}
else if (numeroMes === 3) {
    nomeMes = "O mês informado foi Março"
}
else if (numeroMes === 4) {
     nomeMes= "O mês informado foi Abril"
}
else if (numeroMes === 5) {
    nomeMes = "O mês informado foi Maio"
}
else if (numeroMes === 6) {
    nomeMes = "O mês informado foi Junho"
}
else if (numeroMes === 7) {
    nomeMes = "O mês informado foi Julho"
}
else if (numeroMes === 8) {
    nomeMes = "O mês informado foi Agosto"
}
else if (numeroMes === 9) {
    nomeMes = "O mês informado foi Setembro"
}
else if (numeroMes === 10) {
    nomeMes = "O mês informado foi Outubro"
}
else if (numeroMes === 11) {
    nomeMes = "O mês informado foi Novembro"
}
else if (numeroMes === 12) {
    nomeMes = "O mês informado foi Dezembro"
}
else {
    nomeMes = "Mês inválido"
}


//SWITCH CASE

switch (numeroMes) {
    case 1:
        nomeMes = "O mês informado foi Janeiro"
        break;

    case 2:
        nomeMes = "O mês informado foi Fevereiro"
        break;

    case 3:
        nomeMes = "O mês informado foi Março"
        break;

    case 4:
        nomeMes = "O mês informado foi Abril"
        break;

    case 5:
        nomeMes = "O mês informado foi Maio"
        break;

    case 6:
        nomeMes = "O mês informado foi Junho"
        break;

    case 7:
        nomeMes = "O mês informado foi Julho"
        break;

    case 8:
        nomeMes = "O mês informado foi Agosto"
        break;

    case 9:
        nomeMes = "O mês informado foi Setembro"
        break;

    case 10:
        nomeMes = "O mês informado foi Outubro"
        break;

    case 11:
        nomeMes = "O mês informado foi Novembro"
        break;

    case 12:
        nomeMes = "O mês informado foi Dezembro"
        break;

    default:
        nomeMes = "Mês invalido"
        break;
}


document.body.appendChild(document.createTextNode(nomeMes))


