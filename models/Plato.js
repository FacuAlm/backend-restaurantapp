import mongoose from "mongoose";

const PlatoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
      trim: true,
    },
    categoria: {
      type: String,

      trim: true,
    },
    imagen: {
      type: String,

      trim: true,
    },
    descripcion: {
      type: String,

      trim: true,
    },
    stock: {
      type: Number,

      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Plato", PlatoSchema);
