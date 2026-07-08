const { lerJogadores, salvarJogadores, adicionarJogador, buscarJogadorPorNome, editarJogador, removerJogador, listarJogadores} = require('./services/mercado')
const Jogador = require('./models/Jogador')
const readline = require('readline-sync')
// teste de validação de duplicata
// const Lamine = new Jogador("Lamine Yamal", 19, "Espanha", "barcelona", "PD", 89, 94)
// adicionarJogador(Lamine)

// teste de busca
// const jogadorEncontrado = buscarJogadorPorNome("Lamine Yamal")
// console.log(jogadorEncontrado)

// teste de edição de jogador
// editarJogador("Lamine Yamal", { Overall: 89, Potencial: 94 })

// teste de remoção de jogador
// removerJogador("Vinícius Jr")

function mostrarJogadores() {
    const jogadores = listarJogadores()

    if (jogadores.length === 0) {
        console.log("Nenhum jogador cadastrado.")
        return
    }

    console.log("=== LISTA DE JOGADORES ===")

    jogadores.forEach((jogador, index) => {
        console.log(`
Jogador ${index + 1}
Nome: ${jogador.Nome}
Idade: ${jogador.Idade}
Nacionalidade: ${jogador.Nacionalidade}
Clube: ${jogador.Clube}
Posição: ${jogador.Posicao}
Overall: ${jogador.Overall}
Potencial: ${jogador.Potencial}
----------------------------`)
    })
}

function mostrarMenu() {
    console.log("\n=== EASMARKET ===")
    console.log("1 - Cadastrar jogador")
    console.log("2 - Buscar jogador por nome")
    console.log("3 - Editar jogador")
    console.log("4 - Remover jogador")
    console.log("5 - Listar jogadores")
    console.log("6 - Calcular Valor de Mercado de Jogador Cadastrado")
    console.log("0 - Sair")
}

function cadastrarJogadorMenu() {
    console.log("\n=== CADASTRAR JOGADOR ===")

    const nome = readline.question("Nome: ")
    const idade = Number(readline.question("Idade: "))
    const nacionalidade = readline.question("Nacionalidade: ")
    const clube = readline.question("Clube: ")
    const posicao = readline.question("Posicao: ").toUpperCase()
    const overall = Number(readline.question("Overall: "))
    const potencial = Number(readline.question("Potencial: "))

    const novoJogador = new Jogador(
        nome,
        idade,
        nacionalidade,
        clube,
        posicao,
        overall,
        potencial
    )

    adicionarJogador(novoJogador)
}

function removerJogadorMenu() {
    console.log("\n=== REMOVER JOGADOR ===")

    const nome = readline.question("Digite o nome do jogador que deseja remover: ")

    removerJogador(nome)    
}

function buscarJogadorMenu() {
    console.log("\n=== BUSCAR JOGADOR ===")

    const nome = readline.question("Digite o nome do jogador: ")
    const jogador = buscarJogadorPorNome(nome)

    if (!jogador) {
        console.log("Jogador nao encontrado.")
        return
    }

    console.log(`
=== JOGADOR ENCONTRADO ===
Nome: ${jogador.Nome}
Idade: ${jogador.Idade}
Nacionalidade: ${jogador.Nacionalidade}
Clube: ${jogador.Clube}
Posicao: ${jogador.Posicao}
Overall: ${jogador.Overall}
Potencial: ${jogador.Potencial}
----------------------------`)
}

function editarJogadorMenu () {
    console.log("\n=== EDITAR JOGADOR ===");
    const nome = readline.question("Digite o nome do jogador que deseja editar: ")
    
    const jogadorExistente = buscarJogadorPorNome(nome)

    if (!jogadorExistente) {
        console.log("Jogador nao encontrado");
        return
    }

    console.log("Deixe em brando e pressione enter para manter o valor atual.\n");
    const novoNome = readline.question(`Nome (${jogadorExistente.Nome}): `)
    const novaIdade = readline.question(`Idade (${jogadorExistente.Idade}): `)
    const novaNacionalidade = readline.question(`Nacionalidade (${jogadorExistente.Nacionalidade}): `)
    const novoClube = readline.question(`Clube (${jogadorExistente.Clube}): `)
    const novaPosicao = readline.question(`Posicao (${jogadorExistente.Posicao}): `)
    const novoOverall = readline.question(`Overall (${jogadorExistente.Overall}): `)
    const novoPotencial = readline.question(`Potencial (${jogadorExistente.Potencial}): `)

    const novosDados = {}

    if (novoNome !== "") {
        novosDados.Nome = novoNome
    }

    if (novaIdade !== "") {
        novosDados.Idade = Number(novaIdade)
    }

    if (novaNacionalidade !== "") {
        novosDados.Nacionalidade = novaNacionalidade
    }

    if (novoClube !== "") {
        novosDados.Clube = novoClube
    }

    if (novaPosicao !== "") {
        novosDados.Posicao = novaPosicao.toUpperCase()
    }

    if (novoOverall !== "") {
        novosDados.Overall = Number(novoOverall)
    }

    if (novoPotencial !== "") {
        novosDados.Potencial = Number(novoPotencial)
    }

    editarJogador(nome, novosDados)   
}

function calcularValorJogadorMenu() {
    console.log("\n=== CALCULAR VALOR DE MERCADO ===")

    const nome = readline.question("Digite o nome do jogador: ")
    const jogadorEncontrado = buscarJogadorPorNome(nome)

    if (!jogadorEncontrado) {
        console.log("Jogador nao encontrado.")
        return
    }

    const jogador = new Jogador(
        jogadorEncontrado.Nome,
        jogadorEncontrado.Idade,
        jogadorEncontrado.Nacionalidade,
        jogadorEncontrado.Clube,
        jogadorEncontrado.Posicao,
        jogadorEncontrado.Overall,
        jogadorEncontrado.Potencial
    )

    const valor = jogador.calcularValor()

    console.log("\nCalculando valor de mercado...\n")
    console.log(`O jogador ${jogador.Nome} vale R$ ${valor.toLocaleString('pt-BR')}`)
}

function iniciarSistema() {
    let opcao = ""

    while (opcao !== "0") {
        mostrarMenu()
        opcao = readline.question("Escolha uma opcao: ")

        if (opcao === "1") {
            cadastrarJogadorMenu()

        } else if (opcao === "2") {
            buscarJogadorMenu()

        } else if (opcao === "3") {
            editarJogadorMenu()

        } else if (opcao === "4") {
            removerJogadorMenu()

        } else if (opcao === "5") {
            mostrarJogadores()

        } else if (opcao === "6") {
            calcularValorJogadorMenu()

        } else if (opcao === "0") {
            console.log("Encerrando o sistema...")

        } else {
            console.log("Opcao invalida. Tente novamente.")
        }
    }
}


iniciarSistema()