import Sequelize from 'sequelize';
import Aluno from '../models/Aluno.mjs';
import Professor from '../models/Professor.mjs';
import Turma from '../models/Turma.mjs';
import Curso from '../models/Cursos.mjs';
import Matricula from '../models/Matricula.mjs';

// Inicializando a conexão com o banco de dados
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

// Lista de modelos
const models = [Aluno, Professor, Turma, Curso, Matricula];

// Inicializando os modelos
models.forEach(model => model.init(sequelize));

// Associando os modelos (garantindo que as associações sejam feitas após a inicialização)
models.forEach(model => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

// Sincronizando o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});

export default sequelize;
