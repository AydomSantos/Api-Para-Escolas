import Matricula from '../models/Matricula.mjs';

export default {
  // Lista todas as matrículas
  async index(req, res) {
    try {
      const matriculas = await Matricula.findAll();
      return res.json(matriculas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Cria uma nova matrícula
  async store(req, res) {
    try {
      const matricula = await Matricula.create(req.body);
      return res.json(matricula);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Atualiza uma matrícula existente
  async update(req, res) {
    try {
      const { id } = req.params;
      const matricula = await Matricula.findByPk(id);
      if (!matricula) {
        return res.status(404).json({ error: 'Matrícula não encontrada' });
      }
      await matricula.update(req.body);
      return res.json(matricula);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Deleta uma matrícula existente
  async delete(req, res) {
    try {
      const { id } = req.params;
      const matricula = await Matricula.findByPk(id);
      if (!matricula) {
        return res.status(404).json({ error: 'Matrícula não encontrada' });
      }
      await matricula.destroy();
      return res.json({ message: 'Matrícula deletada com sucesso' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
