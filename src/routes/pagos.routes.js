import { Router } from "express";
import { pagarPedido } from "../controllers/medioPago.controllers";

const router = Router();

router
  .route("/pagar")

  .post(pagarPedido);

export default router;
