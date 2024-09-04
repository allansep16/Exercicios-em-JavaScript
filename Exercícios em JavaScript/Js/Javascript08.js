let preco = parseFloat(prompt("Digite o preço do produto:"));
let descontoPercentual = parseFloat(prompt("Digite o percentual de desconto:"));
let desconto = preco * (descontoPercentual / 100);
let precoFinal = preco - desconto;
alert("O valor do desconto é: " + desconto.toFixed(2) + "\nO preço final com desconto é: " + precoFinal.toFixed(2));