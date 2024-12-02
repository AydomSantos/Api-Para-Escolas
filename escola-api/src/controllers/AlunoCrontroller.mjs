import Aluno from '../models/Aluno.mjs';

export default {
    async index(req, res) {
        const alunos = await Aluno.findAll();
        return res.json(alunos);
    },

    async store(req, res) {
        const aluno = await Aluno.create(req.body);
        return res.status(201).json(aluno);
    },

    async update(req, res) {
        const { id } = req.params;
        const aluno = await Aluno.findByPk(id);

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado.' });
        }

        await aluno.update(req.body);
        return res.json(aluno);
    },

    async delete(req, res) {
        const { id } = req.params;
        const aluno = await Aluno.findByPk(id);

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado.' });
        }

        await aluno.destroy();
        return res.status(204).send();
    }
};
