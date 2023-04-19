import express from "express";
import to_doRoute from "./src/routes/routes.js"
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = 3000


// Caminho para acessar
connectDatabase()
app.use(express.json());
app.use("/to_do", to_doRoute)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
