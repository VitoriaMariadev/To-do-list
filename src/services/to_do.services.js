import to_do_bd from "../models/to_do.js"

const create = (body) => to_do_bd.create(body) // Cria uma nova lista

const findAllService = () => to_do_bd.find(); // Procura todas as listas

const findByIdService = (id) => to_do_bd.findById(id); // Procura uma lista por um parametro especifico

// const findByNameService = (nome) => to_do_bd.findByName(nome);

export default {
    create,
    findAllService,
    findByIdService
}