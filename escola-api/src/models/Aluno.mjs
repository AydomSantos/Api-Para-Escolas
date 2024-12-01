import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
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
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'A idade deve ser um número inteiro'
          },
          min: {
            args: [1],
            msg: 'A idade deve ser maior que zero'
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: true,
        validate: {
          isFloat: {
            msg: 'O peso deve ser um número'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: true,
        validate: {
          isFloat: {
            msg: 'A altura deve ser um número'
          }
        }
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
      tableName: 'alunos'
    });
    return this;
  }

  static associate(models) {
    // Definir associações se necessário
  }
}

export default Aluno;
