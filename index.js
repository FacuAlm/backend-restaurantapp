import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import clienteRoutes from "./routes/clienteRoutes.js";
import platoRoutes from "./routes/platoRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

app.use(cors());

app.use("/api/clientes", clienteRoutes);
app.use("/api/platos", platoRoutes);
app.use("/api/pedidos", pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
