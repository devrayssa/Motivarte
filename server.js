const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Substitua pela sua string de conexão do MongoDB Atlas
const mongoDBURL =
  "mongodb+srv://rayttsy:3izFAzjKATZJr0om@cluster0.bh0aa.mongodb.net/";

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.use(express.json());
app.use(express.static("public"));

// Modelo de feedback
const FeedbackSchema = new mongoose.Schema({
  feedback: String,
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

// Endpoint para enviar feedback
app.post("/submit-feedback", async (req, res) => {
  const { feedback } = req.body;
  try {
    const newFeedback = new Feedback({ feedback });
    await newFeedback.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.json({ success: false });
  }
});

// Endpoint para obter feedback
app.get("/get-feedback", async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });
    res.json({ feedback: feedbackList });
  } catch (err) {
    console.error(err.message);
    res.json({ feedback: [] });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
