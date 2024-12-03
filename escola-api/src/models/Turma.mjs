"use strict";

import Sequelize, { Model } from "sequelize";

class Turma extends Model {
  static init(sequelize) {
    super.init(
      {
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
          validate: {
            isNumeric: true, // Validação para garantir que é numérico
          },
        },
      },
      {
        sequelize,
        tableName: "turmas", // Nome da tabela no banco de dados
        timestamps: false, // Desabilita colunas createdAt e updatedAt
      }
    );

    return this;
  }
}

export default Turma;
