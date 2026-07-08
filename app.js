const { lerJogadores, salvarJogadores, adicionarJogador } = require('./services/mercado')
const Jogador = require('./models/Jogador')



const jogadores = lerJogadores()
console.log(jogadores)

// const Lamine = new Jogador("Lamine Yamal", 19, "Espanha", "barcelona", "PD", 89, 94)
// adicionarJogador(Lamine)