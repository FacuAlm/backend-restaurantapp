import express from "express";
import {
  crearPlato,
  obtenerPlatos,
  obtenerPlato,
  actualizarPlato,
  eliminarPlato,
} from "../controllers/platoController.js";

const router = express.Router();

router.post("/", crearPlato);
router.get("/", obtenerPlatos);
router.get("/:id", obtenerPlato);
router.put("/:id", actualizarPlato);
router.delete("/:id", eliminarPlato);

export default router;
