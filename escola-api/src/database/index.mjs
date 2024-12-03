import Sequelize from 'sequelize';

// Importando os modelos

import Aluno from '../models/Aluno.mjs';
import Professor from '../models/Professor.mjs';
import Turma from '../models/Turma.mjs';

// Inicializando o Sequelize com SQLite

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

// Associando os modelos aos models do Sequelize

const models = [Aluno , Professor, Turma];

// Inicializando os models com os dados do Sequelize

models.forEach(model => model.init(sequelize));
models.forEach(model => model.associate && model.associate(sequelize.models));

export default sequelize;
