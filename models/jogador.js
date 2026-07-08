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
        VOL: 1.05,
        ZAG: 1.15,
        LD: 1.00,
        LE: 1.00,
        GOL: 0.70
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

module.exports = Jogador