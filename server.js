import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ticketRoutes from "./routes/tickets.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/tickets", ticketRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// Ruta base
app.get("/", (req, res) => {
  res.send("🚀 API TicketFlow funcionando correctamente");
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
