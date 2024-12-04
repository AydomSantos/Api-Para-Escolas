import  Sequelize , { Model }  from "sequelize";

class Curso extends Model{
  static init(sequelize){
    super.init({
      i_id_cursos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      s_nome_cursos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      i_carga_horaria_cursos: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
    return this;
  }
  associate(models){
    this.hasMany(models.Turma, { foreignKey: 'i_id_cursos', as: 'turmas' });
  }
}

export default Curso;