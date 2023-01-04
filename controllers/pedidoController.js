import Pedido from "../models/Pedido.js";
import Plato from "../models/Plato.js";
import Cliente from "../models/Cliente.js";

export const crearPedido = async (req, res) => {
  const { cliente, plato } = req.body;

  try {
    const platoEncontrado = await Plato.findById(plato);
    const clienteEncontrado = await Cliente.findById(cliente);
    if (!platoEncontrado) {
      return res.status(404).json({ msg: "Plato no encontrado" });
    }
    if (!clienteEncontrado) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }
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
