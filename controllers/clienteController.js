import Cliente from "../models/Cliente.js";

export const crearCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json({ cliente });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json({ clientes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const obtenerCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }
    res.json({ cliente });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const actualizarCliente = async (req, res) => {
  const clienteActualizado = req.body;

  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }
    cliente = await Cliente.findOneAndUpdate(
      { _id: req.params.id },
      clienteActualizado,
      {
        new: true,
      }
    );
    res.json({ cliente });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }
    await Cliente.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Cliente eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
