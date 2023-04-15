import mongoose from "mongoose";
import to_doServices from "../services/to_do.services.js";

const validId = (req, res, next) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({menssagem: "Id inválido"})
    }

    next();
};

const validTo_do = async (req, res, next) => {
    const id = req.params.id

    const to_do = await to_doServices.findByIdService(id);

    if (!to_do) {
        return res.status(400).send({menssagem: "Lista não encontrada"})
    };

    req.id = id;
    req.to_do = to_do;

    next()
}


export default validId && validTo_do