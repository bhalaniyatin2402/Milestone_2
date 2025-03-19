import { config } from "dotenv";
config()
import express from 'express'
import cors from 'cors'
import hbs from 'hbs'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('./public'))

import blogRoutes from './routes/blogRoute.js'

app.use('/', blogRoutes)

export default app
