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

function preecherDestino() {
  document.querySelector('#valorDestino').value = calculaMoeda(
    moedaOrigem, moedaTipoOrigem, moedaTipoDestino
  )
}

const formMoeda = document.getElementById('formMoeda')

let moedaOrigem = document.querySelector('#valorOrigem').value
let moedaDestino = document.querySelector('#valorDestino').value
let moedaTipoOrigem = document.querySelector('#moedaTipoOrigem').value
let moedaTipoDestino = document.querySelector('#moedaTipoDestino').value

formMoeda.addEventListener('input', (e) => {
  if(e.target.name === 'valorOrigem') {
    moedaOrigem = e.target.value
  } else if(e.target.name === 'valorDestino') {
    valorDestino = e.target.value
  } else if(e.target.name === 'moedaTipoOrigem') {
    moedaTipoOrigem = e.target.value
  } else if(e.target.name === 'moedaTipoDestino') {
    moedaTipoDestino = e.target.value
  }

  preecherDestino()  
})

preecherDestino()