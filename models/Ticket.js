import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  namePerson: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    default: "Abierto",
    enum: ["Abierto", "En Proceso", "Finalizado"],
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Ticket", ticketSchema);
