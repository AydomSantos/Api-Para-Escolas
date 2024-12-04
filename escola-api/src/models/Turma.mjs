import Sequelize, { Model } from 'sequelize';

class Turma extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      serie: {
        type: Sequelize.STRING,
        allowNull: false
      },
      curso_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cursos', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'turmas'
    });
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Aluno, { through: 'Matriculas', foreignKey: 'turma_id', as: 'alunos' });
  }
}

export default Turma;
