'use strict';
import { Model, DataTypes } from 'sequelize';

class Matricula extends Model {
  static init(sequelize) {
    super.init({
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
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, {
      foreignKey: 'aluno_id',
      as: 'aluno'
    });

    this.belongsTo(models.Turma, {
      foreignKey: 'turma_id',
      as: 'turmas'
    });
  }
}

export default Matricula;
