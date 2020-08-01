const real = 5.2
const euro = 0.85
const libra = 0.77
const dolar = 1

const moedas = {
  EUR: euro,
  LIB: libra,
  BRL: real,
  USD: dolar
}

function calculaMoeda(valor, moedaEntrada, moedaSaida) {  
  return valor / moedas[moedaEntrada] * moedas[moedaSaida]
 
}

console.log(calculaMoeda(100, 'BRL', 'LIB'))