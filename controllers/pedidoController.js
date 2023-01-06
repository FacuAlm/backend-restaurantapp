import Pedido from "../models/Pedido.js";
import Plato from "../models/Plato.js";
import Cliente from "../models/Cliente.js";

export const crearPedido = async (req, res) => {
  const plato = await Plato.findById(req.body.plato);
  const cliente = await Cliente.findById(req.body.cliente);

  if (!plato || !cliente) {
    return res.status(404).json({ msg: "Plato o cliente no encontrado" });
  }

  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.json({ pedido });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json({ pedidos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const obtenerPedido = async (req, res) => {
  try {
    let pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }
    res.json({ pedido });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const actualizarPedido = async (req, res) => {
  const pedidoActualizado = req.body;

  try {
    let pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }
    pedido = await Pedido.findOneAndUpdate(
      { _id: req.params.id },
      pedidoActualizado,
      {
        new: true,
      }
    );
    res.json({ pedido });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    let pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }
    await Pedido.findByIdAndRemove({ _id: req.params.id });
    res.json({ msg: "Pedido eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
