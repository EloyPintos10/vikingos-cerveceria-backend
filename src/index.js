import * as dotenv from 'dotenv'
import express from 'express';
import morgan from 'morgan';
import cors from "cors"
import path from 'path';
import productoRouter from './routes/productos.routes'
import pedidosRouter from "./routes/pedidos.routes"
import authRouter from './routes/usuario.routes'
import './database';
dotenv.config();


const app = express();


app.set('port', process.env.PORT || 4000);
console.log()
app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'))
})


//middlewears:  

app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')))

//rutas

app.use('/apiragnar',productoRouter);
app.use('/apiragnar',pedidosRouter);
app.use('/apiragnar/auth',authRouter);

