import Turma from '../models/Turma.mjs';

export default {
    async index(req, res) {
        const turmas = await Turma.findAll();
        return res.json(turmas);
    },

    async armazenar(req, res) {
        const turma = await Turma.create(req.body);
        return res.status(201).json(turma);
    },

    async update(req, res) {
        const { id } = req.params;
        const turma = await Turma.findByPk(id);
        
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada.' });
        }
        
        await turma.update(req.body);
        return res.json(turma);
    },

    async delete(req, res) {
        const { id } = req.params;
        const turma = await Turma.findByPk(id);
        
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada.' });
        }
        
        await turma.destroy();
        return res.send();
    }
 
}

