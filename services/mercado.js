const fs = require('fs')
const caminhoArquivo = './data/jogadores.json'

function lerJogadores() {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8')
    return JSON.parse(dados)
}

function salvarJogadores(jogadores) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(jogadores, null, 2))
}

function buscarJogadorPorNome(nome) {
    const jogadores = lerJogadores()
    return jogadores.find(jogador => jogador.Nome === nome)
}

function adicionarJogador(jogador) {
    const jogadores = lerJogadores()

    // adicionando validação e eliminação de duplicatas na função.
    const jogadorExistente = jogadores.find(j => j.Nome === jogador.Nome)

    if (jogadorExistente) {
        console.log("Não é possível adicionar um jogador que já está cadastrado. ");
        return
    }

    jogadores.push(jogador)
    salvarJogadores(jogadores)
    console.log("jogador adicionado com sucesso! ");
    
    
}

module.exports = {
    lerJogadores,
    salvarJogadores,
    adicionarJogador,
    buscarJogadorPorNome

}

