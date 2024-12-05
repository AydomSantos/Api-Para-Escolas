import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'alunos',
        timestamps: true, // Adiciona `createdAt` e `updatedAt` automaticamente
        underscored: true, // Usa snake_case para as colunas e associações
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Turma, { through: 'Matriculas', foreignKey: 'aluno_id', as: 'turmas' });
  }
}

export default Aluno;
