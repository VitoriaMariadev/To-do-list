import express from "express";
import to_doRoute from "./src/routes/routes.js"
import connectDatabase from "./src/database/db.js";

const app = express();
const port = 3000

connectDatabase()
app.use(express.json());
app.use("/to_do", to_doRoute)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

console.log('oi')