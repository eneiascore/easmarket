const { lerJogadores, salvarJogadores, adicionarJogador, buscarJogadorPorNome} = require('./services/mercado')
const Jogador = require('./models/Jogador')



const jogadores = lerJogadores()


// teste de validação de duplicata
// const Lamine = new Jogador("Lamine Yamal", 19, "Espanha", "barcelona", "PD", 89, 94)
// adicionarJogador(Lamine)

// teste de busca
const jogadorEncontrado = buscarJogadorPorNome("Lamine Yamal")
console.log(jogadorEncontrado)