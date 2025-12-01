# GameVault API

Backend do catálogo GameVault, desenvolvido em Node.js + Express com Prisma ORM e PostgreSQL. Ele expõe endpoints REST para gerenciar jogos, consoles e avaliações, além de seeds que alimentam o banco com dados de exemplo.

## Tecnologias

Node.js 20+ com ECMAScript Modules
Express 5 e CORS
Prisma ORM conectado a PostgreSQL
Nodemon para desenvolvimento

## Pré-requisitos

Node.js LTS (>= 20)
PostgreSQL acessível via DATABASE_URL
npm 10+

## Configuração rápida

1. **Clonar e instalar dependências**

bash
git clone https://github.com/nunezada08/gameVault-projetoFinal-backend.git
cd gameVault-projetoFinal-backend
npm install

2. **Configurar variáveis de ambiente** (crie .env na raiz):

ini
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
PORT=3001 # opcional, default 3001

3. **Aplicar o schema e povoar dados**:

bash
npx prisma migrate dev
npm run seed

4. **Subir o servidor**:

bash
npm run dev

O backend ficará disponível em http://localhost:3002 (ou porta definida em PORT).

### Scripts úteis

| Script | Comando        | Descrição                                                         |
| ------ | -------------- | ----------------------------------------------------------------- |
| dev    | npm run dev    | Inicia o servidor com nodemon                                     |
| seed   | npm run seed   | Executa prisma/seed.mjs para popular jogos, consoles e avaliações |
| studio | npm run studio | Abre o Prisma Studio para inspecionar dados                       |

## Estrutura

server.js # configuração do Express
src/
routes/ # rotas Express por recurso
controllers/ # validações + regras de cada recurso
models/ # acesso ao banco via Prisma Client
prisma/
schema.prisma # definição das tabelas
seed\*.js # seeds por domínio

## Endpoints principais

Todos retornam JSON e aceitam/entregam dados em português.

### Jogos (/jogos)

| Método | Rota       | Descrição                                                                                                 |
| ------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| GET    | /jogos     | Lista jogos com filtros via query (nome, desenvolvedor, genero, anoLancamento, plataforma)                |
| GET    | /jogos/:id | Busca jogo pelo ID                                                                                        |
| POST   | /jogos     | Cria jogo (campos obrigatórios: nome, desenvolvedor, genero, anoLancamento, preco, descricao, plataforma) |
| PUT    | /jogos/:id | Atualiza um jogo existente com validações de gênero, plataforma, ano e preço                              |
| DELETE | /jogos/:id | Remove um jogo                                                                                            |

Gêneros aceitos: Ação, Soulslike, FPS, RPG, Aventura, Realidade virtual, Mapa aberto, Luta, Terror, Indie. Plataformas: PlayStation, Xbox, Nintendo, PC, VR.

### Consoles (/consoles)

| Método | Rota          | Descrição                                                  |
| ------ | ------------- | ---------------------------------------------------------- |
| GET    | /consoles     | Lista consoles (filtros nome, anoLancamento)               |
| GET    | /consoles/:id | Detalha um console                                         |
| POST   | /consoles     | Cria console (nome, nota, anoLancamento, preco, descricao) |
| PUT    | /consoles/:id | Atualiza campos permitidos                                 |
| DELETE | /consoles/:id | Exclui console                                             |

### Avaliações (/avaliacoes)

| Método | Rota            | Descrição                                     |
| ------ | --------------- | --------------------------------------------- |
| GET    | /avaliacoes     | Lista avaliações com filtros nome, comentario |
| GET    | /avaliacoes/:id | Detalha avaliação                             |
| POST   | /avaliacoes     | Cria avaliação (nome, comentario)             |
| PUT    | /avaliacoes/:id | Atualiza avaliação                            |
| DELETE | /avaliacoes/:id | Remove avaliação                              |

## Banco de dados

schema.prisma define modelos Usuario, Jogo, Console, Avaliacao e tabelas de relacionamento.
Rodar npx prisma generate (automático dentro do migrate dev) caso adicione novos modelos.
Seeds ficam em prisma/seed\*.js; seed.mjs orquestra a execução em sequência e loga cada etapa.

## Resolução de problemas

**Migrations quebradas**: rode npx prisma migrate reset --force (apenas em dev) e depois npm run seed.
**Erro de conexão**: confirme DATABASE_URL e se o banco aceita SSL/local.
**Porta ocupada**: altere PORT no .env.

## Licença

Distribuído sob licença MIT (ver package.json).
