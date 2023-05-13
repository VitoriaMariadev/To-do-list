import express from "express";
import to_doRoute from "./src/routes/routes.js"
import connectDatabase from "./src/database/db.js";
import cors from 'cors'
import dotenv from "dotenv"
import { Router } from "express";
dotenv.config()

const app = express();
const port = 3000

const Route = Router()

// Caminho para acessar
connectDatabase()
app.use(express.json());
app.use("/to_do", to_doRoute)

Route.get('/', (req, res) => {
    return res.json({
        sucess: true,
        message: "sucesso"
    })
    
})

app.use(cors())

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

app.use(cors())
