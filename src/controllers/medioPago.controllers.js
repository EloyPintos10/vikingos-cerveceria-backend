import mercadopago from "mercadopago";


export const pagarPedido = async (req, res) => {
    const datos = req.body
        
    mercadopago.configure({
        access_token: "TEST-199154622712346-061411-35ac3d597aba319654b642b5e0b89745-128758513",
      });
      const resultado = await mercadopago.preferences.create({
        items:[
            {
                title: datos.title,
                unit_price: datos.price,
                currency_id: 'ARS',
                quantity: 1
            }
        ]
      });
      console.log(resultado);
      res.send('orden lista para pagar')

  };