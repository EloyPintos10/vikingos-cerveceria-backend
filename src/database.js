import mongoose from "mongoose";
//localhost = 127.0.0.1
// const url = 'mongodb://127.0.0.1:27017/ragnar-indumentaria';// local
 const url = 'mongodb+srv://eloyPintos10:vikingo10@cluster0.tnezf59.mongodb.net/vikingo-cerveceria';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})