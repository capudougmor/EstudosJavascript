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

function preecherDestino({ valorOrigem, moedaTipoOrigem, moedaTipoDestino }) {
  document.querySelector('#valorDestino').value = calculaMoeda(
    valorOrigem, moedaTipoOrigem, moedaTipoDestino
  )
}

const formMoeda = document.getElementById('formMoeda')

const formData = {
  valorOrigem: formMoeda.valorOrigem.value,
  valorDestino: formMoeda.valorDestino.value,
  moedaTipoOrigem: formMoeda.moedaTipoOrigem.value,
  moedaTipoDestino: formMoeda.moedaTipoDestino.value,
}


formMoeda.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value

  preecherDestino(formData)
})

  preecherDestino(formData)