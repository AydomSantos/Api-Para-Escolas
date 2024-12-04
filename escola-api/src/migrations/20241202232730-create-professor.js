

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professores', {
      i_id_professores: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      s_nome_professores: {
        type: Sequelize.STRING,
        allowNull: false
      },
      d_data_de_nascimento_professores: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      s_sexo_professores: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      s_endereco_professores: {
        type: Sequelize.STRING,
        allowNull: true
      },
      i_telefone_professores: {
        type: Sequelize.STRING,
        allowNull: true
      },
      s_email_professores: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      i_cpf_professores: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
          isNumeric: true,
          len: [11, 11]
        }
      },
      i_rg_professores: {
        type: Sequelize.STRING,
        allowNull: true
      },
      s_formacao_professores: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('professores');
  }
};
