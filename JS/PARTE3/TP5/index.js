import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routers/dinoRouters'

const app = express()

app.use(cors());
app.use(morgan('dev'));
app.use(express.json('dev'));

const PORT = process.env.PORT || 3001;
const DB = process.env.DB || // la base

mongoose.connect(DB)
  .then(() => {
    console.log('Db conectada')
  })

  app.use('/api/dinos', router)

app.use((req, res) => {
  console.log('Error')
})

app.listen(PORT, () => {
  console.log('Servidor andando')
})

