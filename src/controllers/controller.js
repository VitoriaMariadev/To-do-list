import to_doServices from "../services/to_do.services.js";
import mongoose from "mongoose";


// Função para cadastrar uma lista
const create = async (req, res) => { // Função assincrona, precisa sair do código para executar
    const { nome, dia, tarefas } = req.body;

    if (!nome || !dia) {
        return res.status(400).send({ menssagem: 'Tem um campo vazio!' })
    }

    const to_do = await to_doServices.create(req.body); //Só ocorre quando a função assincrona for executada

    if (!to_do) {
        return res.status(400)({ menssagem: 'Erro na criação da lista' })
    }

    res.status(201).send({
        menssagem: 'Lista criada com sucesso',
        lista: {
            id: to_do._id,
            nome,
            dia,
            tarefas
        }
    })
};


// Função para procurar todasa as listas
const findAll = async (req, res) => { // Função assincrona, precisa sair do código para executar
    const to_dos = await to_doServices.findAllService();  //Só ocorre quando a função assincrona for executada

    if (to_dos.length === 0) {
        return res.status(400).send({menssagem: 'Não há listas cadastradas'})
    }

    res.send(to_dos)

}

// Função para procurar uma lista especifica usando o 'id'
const findById = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({menssagem: "Id inválido"})

    }

    const to_do = await to_doServices.findByIdService(id)

    if (!to_do) {
        return res.status(400).send({menssagem: "Lista não encontrada"})
    }
    res.send(to_do)
}

const update = async (req, res) => {
    const { nome, dia, tarefas } = req.body;

    if (!nome && !dia && !tarefas) {
        return res.status(400).send({ menssagem: 'Mude pelo menos um campo para fazer alterações' })
    }

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({menssagem: "Id inválido"})
    }

    const to_do = await to_doServices.findByIdService(id);

    if (!to_do) {
        return res.status(400).send({menssagem: "Lista não encontrada"})
    }

    await to_doServices.updateService(
        id,
        nome,
        dia,
        tarefas
    )

    res.send({menssagem: 'Lista mudada com sucesso!'})
    
}


// Função para procurar valores no BD pelo 'nome'
/*
const findByName = async (req, res) => {
    const nome = req.params.nome
    const to_do = await to_doServices.findByNameService(nome)
    if (!to_do) {
        return res.status(400).send({menssagem: "Lista não encontrada"})
    }

    res.send(to_do)

}*/

export default{create, findAll, findById, update}
