import dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()

import cors from "cors"
app.use(cors())

const root = process.env.ROOT

import read_data from "./controllers/controllers_bot.js"
app.use(root, read_data)

import create_msg from "./controllers/controllers_bot.js"
app.use(root, create_msg)

import get_contacts from "./controllers/controllers_bot.js"
app.use(root, get_contacts)

export  default app
