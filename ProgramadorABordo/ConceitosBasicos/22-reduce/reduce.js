const numeros = [5, 12, 30, 10, 99, 4]

const valorInicial = 0

// soma
const valorSomaTotal = numeros.reduce(function (acumulador, valorCorrente) {
  return acumulador + valorCorrente
}, valorInicial)

console.log("valorSomaTotal " + valorSomaTotal);

//clacular media
const valorMedia = numeros.reduce(function (acumulador, valorCorrente, index, array) {
  acumulador = acumulador + valorCorrente
  
  if(index == array.length - 1) {
    return acumulador / array.length
  }
  
  return acumulador
}, valorInicial)

console.log("valorMedia " + valorMedia);

//mesmo que map e filter
const multiMap = numeros.map((valor) => {
  return valor * 2
})

console.log("multiMap " + multiMap);

const multReduce = numeros.reduce(function (acumulador, valorCorrente) {
  acumulador.push(valorCorrente * 2)
  return acumulador
}, [])

console.log("multReduce " + multReduce);

const paresFilter = numeros.filter((valor) => {
  return (valor % 2) === 0
})

console.log("paresFilter " + paresFilter);

const paresReduce = numeros.reduce(function(acumulador, valorCorrente) {
  if((valorCorrente % 2) === 0) {
    acumulador.push(valorCorrente)
  }
  
  return acumulador
}, [])

console.log("paresReduce " + paresReduce);

const numerosDeNumeros = [[23, 33, 23], [23, 45, 6], [3, 56, 6]]

const comFlatmap = numerosDeNumeros.flatMap((valor) => {
  return valor
})

console.log("comFlatmap " + comFlatmap);

const comReduce = numerosDeNumeros.reduce(function(acumulador, valorCorrente) {
  return [...acumulador, ...valorCorrente]
}, [])

console.log("comReduce " + comReduce);