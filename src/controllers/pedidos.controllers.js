import Pedido from "../models/pedidos";

export const crearPedido = async (req, res) => {
    try {
      const pedidoNuevo = new Pedido(req.body);
  
      await pedidoNuevo.save();
      res.status(201).json({
        mensaje: "El pedido fue tomado correctamente",
      });
    } catch (error) {
      console.log(error); 
      res.status(404).json({
        mensaje: "Error al intentar agregar un nuevo pedido",
      });
    }
  };


  export const borrarPedido = async (req, res) => {
    try {
      Pedido.findByIdAndDelete(req.params.id, (err, pedido) => {
        if (err || pedido === null) {
          console.log(err);
          return res
            .status(404)
            .json({ mensaje: "No se pudo eliminar el pedido" });
        }
        console.log(pedido);
        res.status(200).json({
          mensaje: "El pedido fue eliminado correctamente",
        });
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al intentar borrar el pedido",
      });
    }
  };


  export const listarPedidos = async (req, res) => {
    try {
      const pedidos = await Pedido.find();
  
      res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
  
      res.status(404).json({
        mensaje: "Error al buscar los pedidos",
      });
    }
  };

  export const editarPedido = async (req, res) => {
    try {
      
      await Pedido.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "El pedido fue entregado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "Error al intentar entregar el pedido",
      });
    }
  };