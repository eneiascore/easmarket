const { lerJogadores, salvarJogadores } = require('./services/mercado')

const jogadoresTeste = [
    {
        Nome: "Vinícius Jr",
        Idade: 25,
        Nacionalidade: "Brasil",
        Clube: "Real Madrid",
        Posicao: "PE",
        Overall: 90,
        Potencial: 93
    }
]

salvarJogadores(jogadoresTeste)

const jogadores = lerJogadores()
console.log(jogadores)