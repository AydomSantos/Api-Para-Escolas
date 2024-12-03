import Professor from '../models/Professor.mjs';

export default {
    async index(req, res) {
        const professor = await Professor.findAll();
        return res.json(professor)
    },

    async armazenar(req, res){
        const professor = await Professor.create(req.body);
        return res.status(201).json(professor)
    },

    async update(req, res){
        const { id } = req.params;
        const professor = await Professor.findByPk(id);

        if(!professor){
            return res.status(404).json({error: 'Professor não encontrado'});
        };

        await professor.update(req.body);
        return res.json(professor);

    },

    async delete(req, res){
        const { id } = req.params;
        const professor = await Professor.findByPk(id);

        if(!professor){
            return res.status(404).json({error: 'Professor não encontrado'})
        }
    }
}