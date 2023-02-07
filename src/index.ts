import express, { Request, Response } from 'express'
import cors from 'cors'
import {coursesRouter} from './routers/coursesRouter'


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/courses", coursesRouter)


/*Agora implemente os endpoints de criação e deleção de lessons. 
Finalize implementando o endpoint de edição de lessons. Deve ser possível alterar qualquer propriedade.*/