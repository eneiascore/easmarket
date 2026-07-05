#Sistema de definição de valor de mercado#

Entidade principal:
/ Jogador /
Atributos:
- Nome
- Idade
- Nacionalidade
- Clube
- Posição
- Overall

Funcionalidades
- Cadastrar jogador.
- editar jogador
- Listar jogadores.
- Buscar por nome.
- excluir jogaor
- Filtrar por posição.
- Filtrar por overall.
- Ordenar por valor de mercado.
- Calcular automaticamente o valor de mercado.

*ESTRUTURA*
mercado/
│
├── data/
│   └── jogadores.json
│
├── models/
│   └── Jogador.js
│
├── services/
│   └── Mercado.js
│
├── app.js
│
└── README.md