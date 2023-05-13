import mongoose from "mongoose";
import to_doServices from "../services/to_do.services.js";

const validId = (req, res, next) => { // Uma função que é usada mais de uma vez
    try {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ menssagem: "Id inválido" })
        }

        next();
    } catch (err) {
        res.status(500).json({ menssagem: err.menssagem })
    }
};

const validTo_do = async (req, res, next) => {
    try {
        const id = req.params.id

        const to_do = await to_doServices.findByIdService(id);

        if (!to_do) {
            return res.status(400).json({ menssagem: "Lista não encontrada" })
        };

        req.id = id;
        req.to_do = to_do;

        next()
    } catch (err) {
        res.status(500).json({ menssagem: err.menssagem })
}
};


export default validId && validTo_do