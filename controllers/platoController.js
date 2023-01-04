import Plato from "../models/Plato.js";

export const crearPlato = async (req, res) => {
  const { nombre, precio, categoria, imagen, descripcion, stock } = req.body;

  try {
    let plato = await Plato.findOne({ nombre });
    if (plato) {
      return res.status(400).json({ msg: "El plato ya existe" });
    }
    plato = new Plato(req.body);
    await plato.save();
    res.json({ plato });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const obtenerPlatos = async (req, res) => {
  try {
    const platos = await Plato.find();
    res.json({ platos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const obtenerPlato = async (req, res) => {
  try {
    let plato = await Plato.findById(req.params.id);
    if (!plato) {
      return res.status(404).json({ msg: "Plato no encontrado" });
    }
    res.json({ plato });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const actualizarPlato = async (req, res) => {
  const platoActualizado = req.body;

  try {
    let plato = await Plato.findById(req.params.id);
    if (!plato) {
      return res.status(404).json({ msg: "Plato no encontrado" });
    }
    plato = await Plato.findOneAndUpdate(
      { _id: req.params.id },
      platoActualizado,
      {
        new: true,
      }
    );
    res.json({ plato });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

export const eliminarPlato = async (req, res) => {
  try {
    let plato = await Plato.findById(req.params.id);
    if (!plato) {
      return res.status(404).json({ msg: "Plato no encontrado" });
    }
    await Plato.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Plato eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
