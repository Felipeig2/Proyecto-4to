import mongoose from 'mongoose'
import express, { application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/routerPais.js'

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

const DB = 'mongodb://localhost/';
const PORT = 3000;

mongoose.connect(DB)
    .then(() => {
        console.log('Data base conectada')
    });

    app.use('/api/paises', (router));


app.use((req, res) => {
    console.log('No encontrado');
});

app.listen(PORT, () => {
    console.log('Servidor Andando');
});






// vic time rush
