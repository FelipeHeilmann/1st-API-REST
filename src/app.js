import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
const app = express()

db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", ()=>{
    console.log("Conexao com o banco realizada")
})

app.use(express.json())
routes(app)

export default app