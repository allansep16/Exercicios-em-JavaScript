let distancia = parseFloat(prompt("Digite a distância percorrida (em km):"));
let tempo = parseFloat(prompt("Digite o tempo gasto (em horas):"));
let velocidadeMedia = distancia / tempo;
alert("A velocidade média é: " + velocidadeMedia.toFixed(2) + " km/h.");