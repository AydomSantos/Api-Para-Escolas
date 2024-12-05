import { Model, DataTypes } from 'sequelize';

class Curso extends Model {
  static init(sequelize) {
    super.init({
      i_id_cursos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      s_nome_cursos: {
        type: DataTypes.STRING,
        allowNull: false
      },
      i_carga_horaria_cursos: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Curso',
      tableName: 'cursos',
      timestamps: true,
      underscored: true
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Turma, { foreignKey: 'i_id_cursos', as: 'turmas' });
  }
}

export default Curso;
