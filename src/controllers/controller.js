import to_doServices from "../services/to_do.services.js";

// Função para cadastrar uma lista
const create = async (req, res) => { // Função assincrona, precisa sair do código para executar
    try { // Tentar
        const { nome, dia, tarefas } = req.body;

        if (!nome || !dia) {
            return res.status(400).json({ menssagem: 'Tem um campo vazio!' })
        }

        const to_do = await to_doServices.create(req.body); //Só ocorre quando a função assincrona for executada

        if (!to_do) {
            return res.status(400)({ menssagem: 'Erro na criação da lista' })
        }

        res.status(201).json({
            menssagem: 'Lista criada com sucesso',
            lista: {
                id: to_do._id,
                nome,
                dia,
                tarefas
            }
        })
    } catch (err) { // Pegar
        res.status(500).json({ menssagem: err.menssagem })
    }
};


// Função para procurar todasa as listas
const findAll = async (req, res) => { // Função assincrona, precisa sair do código para executar
    try {
        const to_dos = await to_doServices.findAllService();  //Só ocorre quando a função assincrona for executada

        if (to_dos.length === 0) {
            return res.status(400).json({ menssagem: 'Não há listas cadastradas' })
        }

        res.json(to_dos)
    } catch (err) {
        res.status(500).json({ menssagem: err.menssagem })
    }
};

// Função para procurar uma lista especifica usando o 'id'
const findById = async (req, res) => {
    try {
        const to_do = req.to_do

        res.json(to_do)
    } catch (err) {
        res.status(500).json({ menssagem: err.menssagem })
    }
}


// Função para atualizar um elemento do to-do-list
const update = async (req, res) => {
    try {
        const { nome, dia, tarefas } = req.body;

        if (!nome && !dia && !tarefas) {
            return res.status(400).json({ menssagem: 'Mude pelo menos um campo para fazer alterações' })
        }

        const { id, to_do } = req;

        // const to_do = await to_doServices.findByIdService(id);

        await to_doServices.updateService(
            id,
            nome,
            dia,
            tarefas
        )

        res.json({ menssagem: 'Lista mudada com sucesso!' })
    }catch (err) {
        res.status(500).json({ menssagem: err.menssagem })

}
};

// Função para deletar um elemento do to-di-list
const remove = async (req, res) => {
    try{
        const {id} = req;
        if (!id){
            return res.status(400).json({menssagem: 'O campo Id está vazio'})
        }

        const deletado = await to_doServices.deleteService(id)

        res.json({menssagem: 'Lista deletada com sucesso', deletado});
    }catch (err) {
        res.status(500).json({menssagem: err.menssagem})
    }
};

export default { create, findAll, findById, update, remove }
