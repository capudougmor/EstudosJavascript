const numeros = [5, 12, 30, 10, 99, 4]

const valorInicial = 0

// soma
const valorSomaTotal = numeros.reduce(function (acumulador, valorCorrente) {
  return acumulador + valorCorrente
}, valorInicial)
console.log("valorSomaTotal " + valorSomaTotal);

function somaTotal(arr) {
  return arr.reduce(function (acumulador, valorCorrente) {
    return acumulador + valorCorrente
  }, 0)
}
console.log('somaTotal' + somaTotal(numeros));


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

//normalizar dados
const usuarios = [
  {
    id: '001',
    nome: 'Ayrton',
    idade: 28,
    email: 'programadorabordo@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=1',
    sexo: 'M',
    estado: 'RJ',
  },
  {
    id: '002',
    nome: 'João',
    idade: 33,
    email: 'joao@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=2',
    sexo: 'M',
    estado: 'PE',
  },
  {
    id: '003',
    nome: 'Maria',
    idade: 25,
    email: 'maria@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=3',
    sexo: 'F',
    estado: 'RJ',
  },
  {
    id: '004',
    nome: 'Eduardo',
    idade: 20,
    email: 'eduardo@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=4',
    sexo: 'M',
    estado: 'RS',
  },
  {
    id: '005',
    nome: 'Antônia',
    idade: 30,
    email: 'antonia@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=5',
    sexo: 'F',
    estado: 'RJ',
  },
  {
    id: '006',
    nome: 'Joaquina',
    idade: 35,
    email: 'joaquina@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=6',
    sexo: 'F',
    estado: 'TO',
  },
  {
    id: '007',
    nome: 'Mateus',
    idade: 42,
    email: 'mateus@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=7',
    sexo: 'M',
    estado: 'MG',
  },
  {
    id: '008',
    nome: 'Davi',
    idade: 19,
    email: 'davi@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=8',
    sexo: 'M',
    estado: 'MS',
  },
  {
    id: '009',
    nome: 'Angélica',
    idade: 27,
    email: 'angelica@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=9',
    sexo: 'F',
    estado: 'RS',
  },
  {
    id: '010',
    nome: 'Fernando',
    idade: 31,
    email: 'fernando@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=10',
    sexo: 'M',
    estado: 'SP',
  }
];

const usuariosNormalizados = usuarios.reduce(function(acumulador, valorCorrente) {
  acumulador[valorCorrente.id] = valorCorrente
  return acumulador
}, {})

// console.log(usuariosNormalizados);

//agrupamentos

const usuariosPorSexo = usuarios.reduce(function(acumulador, valorCorrente) {
  if(!acumulador[valorCorrente.sexo]) {
    acumulador[valorCorrente.sexo] = []
  }
  acumulador[valorCorrente.sexo].push(valorCorrente)

  return acumulador
}, {})

console.log(usuariosPorSexo);

function agrupaPor(arr, chave) {
  return arr.reduce(function(acumulador, valorCorrente) {
    if(!acumulador[valorCorrente[chave]]) {
      acumulador[valorCorrente[chave]] = []
    }
    acumulador[valorCorrente[chave]].push(valorCorrente)
  
    return acumulador
  }, {})
}

const agrupadosPorIdade = agrupaPor(usuarios, 'idade')
console.log('agrupadosPorIdade', agrupadosPorIdade);