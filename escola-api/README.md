# API Escolar

## Descrição

A **API Escolar** é uma aplicação desenvolvida para gerenciar dados de uma escola, incluindo alunos, professores, turmas e cursos. Esta API permite realizar operações CRUD (Create, Read, Update, Delete) em várias entidades relacionadas à gestão escolar.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework para Node.js para criar servidores web.
- **Sequelize**: ORM para Node.js, utilizado para interagir com o banco de dados.
- **SQLite**: Banco de dados leve utilizado para armazenamento de dados.
- **Swagger**: Ferramenta de documentação de APIs.
- **Jest**: Framework de testes.
- **Supertest**: Biblioteca para testar APIs.

## Requisitos

- **Node.js** (versão >= 12.0.0)
- **NPM** (versão >= 6.0.0)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/api-escolar.git
Navegue até o diretório do projeto:

bash
cd api-escolar
Instale as dependências:

bash
npm install
Configure o ambiente criando um arquivo .env com as seguintes variáveis:

env
NODE_ENV=development
Scripts Disponíveis
Iniciar o Servidor:

bash
npm start
Executar em Ambiente de Desenvolvimento (com nodemon):

bash
npm run dev
Executar Testes:

bash
npm test
Configuração do Banco de Dados
SQLite
A API utiliza SQLite como banco de dados padrão. A configuração está localizada no arquivo config/config.json.

Migrations
Para executar as migrations e criar as tabelas no banco de dados, utilize:

bash
npx sequelize-cli db:migrate
Uso
Endpoints Disponíveis
Alunos
GET /api/alunos: Lista todos os alunos.

POST /api/alunos: Cria um novo aluno.

PUT /api/alunos/:id: Atualiza um aluno existente.

DELETE /api/alunos/:id: Deleta um aluno existente.

Professores
GET /api/professores: Lista todos os professores.

POST /api/professores: Cria um novo professor.

PUT /api/professores/:id: Atualiza um professor existente.

DELETE /api/professores/:id: Deleta um professor existente.

Turmas
GET /api/turmas: Lista todas as turmas.

POST /api/turmas: Cria uma nova turma.

PUT /api/turmas/:id: Atualiza uma turma existente.

DELETE /api/turmas/:id: Deleta uma turma existente.

Cursos
GET /api/cursos: Lista todos os cursos.

POST /api/cursos: Cria um novo curso.

PUT /api/cursos/:id: Atualiza um curso existente.

DELETE /api/cursos/:id: Deleta um curso existente.

Matrículas
GET /api/matriculas: Lista todas as matrículas.

POST /api/matriculas: Cria uma nova matrícula.

PUT /api/matriculas/:id: Atualiza uma matrícula existente.

DELETE /api/matriculas/:id: Deleta uma matrícula existente