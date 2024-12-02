import { Sequelize, Model } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo nome não pode estar vazio",
            },
            len: {
              args: [3, 255],
              msg: "O nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O campo sobrenome não pode estar vazio",
            },
            len: {
              args: [3, 255],
              msg: "O sobrenome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: { msg: "Este email já está cadastrado" },
          validate: { isEmail: { msg: "O email informado não é válido" } },
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isInt: { msg: "A idade deve ser um número inteiro" },
            min: { args: 0, msg: "A idade deve ser um valor positivo" },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: true,
          validate: { isFloat: { msg: "O peso deve ser um número" } },
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
      },
      {
        sequelize,
        tableName: 'alunos',
      }
    );
    return this;
  }
}

export default Aluno;
