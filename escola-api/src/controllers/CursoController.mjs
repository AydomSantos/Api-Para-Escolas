import Curso from '../models/Cursos.mjs';

export default{
    async index(req, res){
        const curso = await Curso.findAll();
        return res.json(curso);
    },

    async armazenar(req,res){
        const curso = await Curso.create(req.body);
        return res.status(201).json(curso);
    },

    async update(req,res){
        const { id } = req.params;
        const curso = await Curso.findByPk(id);

        if (!curso) {
            return res.status(404).json({ error: 'Aluno não encontrado.' });
        }

        await curso.update(req.body);
        return res.json(aluno);
    },

    async delete(req, res) {
        const { id } = req.params;
        const curso = await Curso.findByPk(id);

        if (!curso) {
            return res.status(404).json({ error: 'Aluno não encontrado.' });
        }

        await curso.destroy();
        return res.status(204).send();
    }


}


