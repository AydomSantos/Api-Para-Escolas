"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Turmas", {
      i_id_turmas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      s_nome_turmas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      i_ano_turmas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      i_periodo_turmas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      i_id_professores: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "professores", // Nome da tabela referenciada
          key: "i_id_professores", // Nome da coluna referenciada
        },
        onDelete: "CASCADE", // Ação ao deletar o registro relacionado
        onUpdate: "CASCADE", // Ação ao atualizar o registro relacionado
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Turmas");
  },
};
