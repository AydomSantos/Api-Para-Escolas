const { Aluno } = require('../models');

module.exports = {
    async index(req, res){
        const alunos = await Aluno.findAll();
        return res.json(alunos)
    },
    async store(req, res){
        const aluno = await Aluno.create(req.body);
        return res.json(aluno)
    },
    async update(req, res){
        const {id} = req.params;
        const aluno = await Aluno.findByPk(id);
        await aluno.update(req.body);
        return res.json(aluno)
    },
    async destroy(req, res){
        const { id } = req.params;
        const aluno = await Aluno.findByPk(id);
        await aluno.destroy();
        return res.send();
    } 
}