const fs = require('fs')
const caminhoArquivo = './data/jogadores.json'

function lerJogadores() {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8')
    return JSON.parse(dados)
}

function salvarJogadores(jogadores) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(jogadores, null, 2))
}

function adicionarJogador(jogador) {
    const jogadores = lerJogadores()
    jogadores.push(jogador)
    salvarJogadores(jogadores)
}

module.exports = {
    lerJogadores,
    salvarJogadores,
    adicionarJogador
}

