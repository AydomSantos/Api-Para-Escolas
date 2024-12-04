import Sequelize from 'sequelize';
import Aluno from '../models/Aluno.mjs';
import Professor from '../models/Professor.mjs';
import Turma from '../models/Turma.mjs';
import Curso from '../models/Cursos.mjs';
import Matricula from '../models/Matricula.mjs';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const models = [Aluno, Professor, Turma, Curso, Matricula];

models.forEach(model => model.init(sequelize));
models.forEach(model => model.associate && model.associate(sequelize.models));

export default sequelize;
