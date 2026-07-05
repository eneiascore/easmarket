const fs = require('fs')
const caminhoArquivo = './data/jogadores.json'

function lerJogadores() {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8')
    return JSON.parse(dados)
}

function salvarJogadores(jogadores) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(jogadores, null, 2))
}

module.exports = {
    lerJogadores,
    salvarJogadores
}

