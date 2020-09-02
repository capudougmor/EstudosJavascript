export const agrupaPorMaiorEMenor = pessoas => (
    pessoas.reduce(function(valorAcumulador, valorArray) {
        const maiorOuMenor = valorArray.idade >=18 ? 'maiores' : 'menores'

        valorAcumulador[maiorOuMenor].push(valorArray)
        return valorAcumulador
    }, {maiores: [], menores: []})
) 

