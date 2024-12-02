import Sequelize from 'sequelize';
import Aluno from '../models/Aluno.mjs';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

const models = [Aluno];

models.forEach(model => model.init(sequelize));
models.forEach(model => model.associate && model.associate(sequelize.models));

export default sequelize;
