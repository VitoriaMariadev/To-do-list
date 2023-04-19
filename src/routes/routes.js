import {Router} from "express";
import to_doController from "../controllers/controller.js"
import validId from "../middlewares/global.middlewares.js"
import validTo_do from "../middlewares/global.middlewares.js"

const route = Router()

// O middlewares devem rodar antes de entrar no controller
route.post('/', to_doController.create); //Post cadastra informações no BD
route.get('/', to_doController.findAll); //Get pega informações no BD
route.get('/:id',validId, validTo_do, to_doController.findById); //Get pega informações no BD com um parametro
route.patch('/:id', validId, validTo_do, to_doController.update) // Patch atualiza um elemento por vez - usando post
route.delete('/:id', validId, validTo_do, to_doController.remove) // Delete deleta um elemento pelo id

export default route
