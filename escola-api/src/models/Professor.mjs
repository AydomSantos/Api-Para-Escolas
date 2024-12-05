import { Model, DataTypes } from 'sequelize';

class Professor extends Model {
  static init(sequelize) {
    super.init({
      i_id_professores: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      s_nome_professores: {
        type: DataTypes.STRING,
        allowNull: false
      },
      d_data_de_nascimento_professores: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      s_sexo_professores: {
        type: DataTypes.STRING(1),
        allowNull: false
      },
      s_endereco_professores: {
        type: DataTypes.STRING,
        allowNull: true
      },
      i_telefone_professores: {
        type: DataTypes.STRING,
        allowNull: true
      },
      s_email_professores: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      i_cpf_professores: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
          isNumeric: true,
          len: [11, 11]
        }
      },
      i_rg_professores: {
        type: DataTypes.STRING,
        allowNull: true
      },
      s_formacao_professores: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'professores',
      timestamps: false
    });

    return this;
  }

  static associate(models) {
    // Aqui você pode definir associações com outras tabelas, se necessário
    this.hasMany(models.Turma, { foreignKey: 'i_id_professores', as: 'turmas' });
  }
}

export default Professor;
