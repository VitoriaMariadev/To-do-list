import express from "express";
import to_doRoute from "./src/routes/routes.js"
import connectDatabase from "./src/database/db.js";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();
const port = 3000

// Caminho para acessar

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors())
connectDatabase()

app.use(cookieParser())
app.use(express.json())
app.use("/", to_doRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

