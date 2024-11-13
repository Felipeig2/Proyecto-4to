import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routers/pjRouters.js'

const app = express();


app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const DB = 'mongodb://localhost:27017/users_prueba';
const PORT = process.env.PORT || 3001



mongoose.connect(DB)
  .then(() => {console.log('Database conected')});

  app.use('/api/pjs', (router))


  app.use((req, res) =>{
    console.log('Error')
  })

  app.listen(PORT, () => {
    console.log('Servidor conectado')
  })