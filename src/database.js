import mongoose from "mongoose";

 const url = 'mongodb+srv://eloyPintos10:vikingo10@cluster0.tnezf59.mongodb.net/vikingo-cerveceria';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})