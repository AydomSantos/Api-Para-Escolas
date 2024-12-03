import Sequelize from 'sequelize';
import Aluno from '../models/Aluno.mjs';
import Professor from '../models/Professor.mjs';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

const models = [Aluno , Professor];

models.forEach(model => model.init(sequelize));
models.forEach(model => model.associate && model.associate(sequelize.models));

export default sequelize;
