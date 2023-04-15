import mongoose from "mongoose";
const to_doSchema = new mongoose.Schema({
    nome: {
        type: String,
        resquired: true // Se o campo pode ser vazio ou não
    },
    dia: {
        type: String,
        resquired: true
    },
    tarefas: {
        type: String,
        resquired: false
    }
});

const to_do_bd = mongoose.model('To_do', to_doSchema)

export default to_do_bd