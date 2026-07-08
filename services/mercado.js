const { log } = require('console')
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

function editarJogador(nome, novosDados) {
    const jogadores = lerJogadores()

    const jogador = jogadores.find(j => j.Nome === nome)

    if(!jogador) {
        console.log("Jogador não encontrado. ")
        return
    }

    Object.assign(jogador, novosDados)

    salvarJogadores(jogadores)
    console.log("Jogador Editado com Sucesso! ");
    
}

function removerJogador(nome) {
    const jogadores = lerJogadores()

    const jogadoresFiltrados = jogadores.filter(j => j.Nome !== nome)

    if(jogadores.length === jogadoresFiltrados.length) {
        console.log("Jogador não encontrado");
        return
    }
    salvarJogadores(jogadoresFiltrados)
    console.log("Jogador removido com sucesso! ")

}

function listarJogadores() {
    return lerJogadores()
}

module.exports = {
    lerJogadores,
    salvarJogadores,
    adicionarJogador,
    buscarJogadorPorNome,
    editarJogador,
    removerJogador,
    listarJogadores

}

