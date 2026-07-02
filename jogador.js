class Jogador {
    constructor(Nome, Idade, Nacionalidade, Clube, Posicao, Overall, Potencial){
        this.Nome = Nome 
        this.Idade = Idade
        this.Nacionalidade = Nacionalidade
        this.Clube = Clube
        this.Posicao = Posicao
        this.Overall = Overall
        this.Potencial = Potencial

    }

    calcularValor() {
    // cálculo do valor base
    let valorBase = (Math.max(0, this.Overall - 70)**2) * 220000

    // guardamos valores para variáveis que serão usadas no cálculo
    let fatorIdade = 1
    let fatorPosicao = 1
    let fatorElite = 1
    let fatorPotencial = 1

    // ação do fator idade:

    if (this.Idade <= 18) {
    fatorIdade = 1.30
    } else if (this.Idade <= 23) {
        fatorIdade = 1.25
    } else if (this.Idade <= 24) {
        fatorIdade = 1.15
    } else if (this.Idade <= 27) {
        fatorIdade = 0.95
    } else if (this.Idade <= 29) {
        fatorIdade = 0.85
    } else if (this.Idade <= 31) {
        fatorIdade = 0.70
    } else if (this.Idade <= 33) {
        fatorIdade = 0.45
    } else if (this.Idade <= 35) {
        fatorIdade = 0.12
    } else {
        fatorIdade = 0.09
    }

    // fator Posição:
    const fatoresPosicao = {
        CA: 1.30,
        PE: 1.30,
        SA: 1.20,
        PD: 1.30,
        MEI: 1.15,
        MC: 1.15,
        VOL: 1.00,
        ZAG: 0.95,
        LD: 0.90,
        LE: 0.90,
        GOL: 0.80
    }

    fatorPosicao = fatoresPosicao[this.Posicao]

    if (this.Overall >= 90){
        fatorElite = 1.20
    }


    // Potencial
    const gapPotencial = this.Potencial - this.Overall
    if (gapPotencial >= 8) {
        fatorPotencial = 1.35
    } else if (gapPotencial >= 5) {
        fatorPotencial = 1.22
    } else if (gapPotencial >= 3) {
        fatorPotencial = 1.12
    } else {
        fatorPotencial = 1.00
    }
    
    const valorDeMercado = valorBase * fatorIdade * fatorPosicao * fatorElite * fatorPotencial
    return valorDeMercado

    }
}


// Primeiros Testes:
const DeBruyne = new Jogador("Kevin de Bruyne","35", "Bélgica", "Napoli", "MEI", "87", "87")
console.log(`${DeBruyne.Nome} vale €${DeBruyne.calcularValor().toLocaleString('pt-BR')}`)

const Neymar = new Jogador("Neymar Jr","34", "Brasil", "Santos", "MEI", "85", "85")
console.log(`${Neymar.Nome} vale €${Neymar.calcularValor().toLocaleString('pt-BR')}`)

const Lewa = new Jogador("Lewadowski","37", "Barcelona", "Polonia", "CA", "87", "87")
console.log(`${Lewa.Nome} vale €${Lewa.calcularValor().toLocaleString('pt-BR')}`)

const Vini = new Jogador("Vinícius Jr","25", "Real Madrid", "Brasil", "PE", "90", "93")
console.log(`${Vini.Nome} vale €${Vini.calcularValor().toLocaleString('pt-BR')}`)

const Yamal = new Jogador("Lamine Yamal","18", "Barcelona", "Espanha", "PD", "90", "94")
console.log(`${Yamal.Nome} vale €${Yamal.calcularValor().toLocaleString('pt-BR')}`)

const Haaland = new Jogador("Erling Braut Haaland","24", "Manchester City", "Noruega", "CA", "91", "94")
console.log(`${Haaland.Nome} vale €${Haaland.calcularValor().toLocaleString('pt-BR')}`)

const Pedri = new Jogador("Pedri","23", "Barcelona", "Espanha", "MC", "89", "93")
console.log(`${Pedri.Nome} vale €${Pedri.calcularValor().toLocaleString('pt-BR')}`)

const Neves = new Jogador("João Neves","21", "PSG", "Portugal", "MC", "86", "92" )
console.log(`${Neves.Nome} vale €${Neves.calcularValor().toLocaleString('pt-BR')}`)

const Wirtz = new Jogador("Florean Wirtz","23", "Liverpool", "Alemanha", "MEI", "89", "92" )
console.log(`${Wirtz.Nome} vale €${Wirtz.calcularValor().toLocaleString('pt-BR')}`)

const Valverde = new Jogador("Fede Valvede","27", "Real Madrid", "Uruguai", "MC", "89", "91")
console.log(`${Valverde.Nome} vale €${Valverde.calcularValor().toLocaleString('pt-BR')}`)

const Rice = new Jogador("Declan Rice","27", "Arsenal", "Inglaterra", "MC", "90", "92")
console.log(`${Rice.Nome} vale €${Rice.calcularValor().toLocaleString('pt-BR')}`)

const ElliotAnderson = new Jogador("Elliot Anderson","23", "Nottingham Forest", "Inglaterra", "MC", "83", "89")
console.log(`${ElliotAnderson.Nome} vale €${ElliotAnderson.calcularValor().toLocaleString('pt-BR')}`)



