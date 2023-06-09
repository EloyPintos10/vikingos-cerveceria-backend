import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        minLength: 2
    },
    precio:{
        type: Number,
        required: true,
    },
    imagen:{
        type: String,
        required: true,
    },
    descripcionProducto:{
        type: String,
        required: true,
        unique: true,
        maxLength: 300,
        minLength: 10
    },
    categoria:{
        type: String,
        required: true,
        maxLength: 80,
        minLength: 2
    },
    quantity:{
        type: Number,
        
    }
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;