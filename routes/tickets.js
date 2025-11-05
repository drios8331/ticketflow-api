import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

// Obtener todos los tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear un nuevo ticket
router.post("/", async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    const saved = await ticket.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un ticket
router.put("/:id", async (req, res) => {
  try {
    const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
