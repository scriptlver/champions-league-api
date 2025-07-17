# 🏆 Champions League API

Uma API RESTful fictícia feita em Node.js com TypeScript para simular dados da UEFA Champions League, como jogadores, clubes e estatísticas. Essa API foi um desafio do Bootcamp "Meu Tudo - Mobile Developer" da DIO! ✨

---

## 📁 Estrutura do Projeto

- src/
- ├── controllers/ # Funções que lidam com as requisições
- ├── models/ # Interfaces dos dados (TypeScript)
- ├── repositories/ # Acesso e manipulação dos dados
- ├── services/ # Regras de negócio
- ├── routes/ # Rotas da API
- └── data/ # Base de dados em JSON

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Nodemon
- fs/promises

---

## ⚙️ Instalação

1. **Clone o repositório:**
- bash
- git clone https://github.com/scriptlver/champions-league-api.git
- cd champions-league-api
---

2. **Instale as dependências:**
- npm install
---

3. **Inicie o servidor:**
- npm run dev

- A API estará disponível em: http://localhost:3000
---
## 📌 Endpoints Disponíveis
🔹 Players
- **GET	/players** - Listar todos os jogadores
- **GET	/players/:id** - Buscar jogador por ID
- **POST	/players** - Criar um novo jogador
- **PATCH	/players/:id** - Atualizar um jogador
- **DELETE	/players/:id** - Deletar um jogador

🔹 Clubs
- **GET	/clubs** - Listar todos os clubes
---
## 📊 Exemplo de Estrutura de Dados
💫 Player
```ts
{
  "id": 1,
  "name": "Lionel Messi",
  "club": "Inter Miami",
  "nationality": "Argentina",
  "position": "RW",
  "statistics": {
    "Overall": 91,
    "Pace": 80,
    "Shooting": 87,
    "Passing": 90,
    "Dribbling": 94,
    "Defending": 34,
    "Physical": 64
  }
}
```
💫 Club
```ts
  {
    "id": 1,
    "name": "Real Madrid"
  }
```
--- 
## ✨ Contribuições
Sinta-se à vontade para abrir uma issue ou pull request com sugestões ou melhorias!

