'use strict';
import Sequelize , { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
  
    static associate(models) {
      // Definindo associação com Aluno
      this.belongsTo(models.Aluno, {
        foreignKey: 'aluno_id',
        as: 'aluno'
      });
      
      // Definindo associação com Turma
      this.belongsTo(models.Turma, {
        foreignKey: 'turma_id',
        as: 'turmas'
      });
    }
  }
  Matricula.init({
    aluno_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Alunos',
        key: 'id'
      },
      allowNull: false
    },
    turma_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Turmas',
        key: 'id'
      },
      allowNull: false
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matriculas',
    timestamps: true,
    underscored: true
  });
  return Matricula;
};
