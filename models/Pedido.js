import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema(
  {
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },

    plato: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plato",
      required: true,
    },

    estado: {
      type: String,
      default: "PENDIENTE",
      enum: ["PENDIENTE", "COMPLETADO", "CANCELADO"],
    },

    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Pedido", PedidoSchema);
