import * as dotenv from 'dotenv'
import express from 'express';
import cors from "cors"
import morgan from 'morgan';
import path from 'path';
import productoRouter from './routes/productos.routes'
import pedidosRouter from "./routes/pedidos.routes"
import authRouter from './routes/usuario.routes'
import './database';
dotenv.config();


const app = express();


app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'))
})


//middlewears:  

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')))

//rutas

app.use('/apiragnar',productoRouter);
app.use('/apiragnar',pedidosRouter);
app.use('/apiragnar/auth',authRouter);

