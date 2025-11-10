import express from "express";
import dotenv from "dotenv";
import jogosRoute from './src/routes/jogosRoute.js';
import consolesRoute from './src/routes/consolesRoute.js'
import avaliacoesRoute from './src/routes/avaliacoesRoute.js'


const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use("/jogos", jogosRoute)
app.use("/consoles", consolesRoute)
app.use("/avaliacoes", avaliacoesRoute)

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});