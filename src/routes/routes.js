import {Router} from "express";
import to_doController from "../controllers/controller.js"

const route = Router()

route.post('/', to_doController.create); //Post cadastra informações no BD
route.get('/', to_doController.findAll); //Get pega informações no BD
route.get('/:id', to_doController.findById); //Get pega informações no BD com um parametro
route.patch('/:id', to_doController.update)
//route.get('/:nome', findByName)

export default route