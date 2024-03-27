import dotenv from "dotenv-safe"
dotenv.config()

import express from "express"
const routes = express.Router()
const app = express()

import cors from "cors"
app.use(cors())

import bodyParser from "body-parser"
app.use(bodyParser.json())

const root = process.env.ROOT

import controllers from "./controllers/controllers_bot.js"

// app.get(root, (req, res)=>{
//     res.status(200).json({
//         statusCode: 200,
//         message: "Servidor em execução!"
//     })
// })

app.use(root, controllers.read_data)

//app.use(root, controllers.create_msg)

//app.use(root, controllers.get_contacts)

export  default app
