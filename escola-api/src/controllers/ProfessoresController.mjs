import Professor from '../models/Professor.mjs';

export default {
    async index(req, res) {
        const professor = await Professor.findAll();
        return res.json(professor)
    },

    async armazenar(req, res){

    },

    async update(req, res){

    },

    async delete(req, res){

    }
}