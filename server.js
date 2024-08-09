const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

// Configurar o banco de dados SQLite
const db = new sqlite3.Database(":memory:");
db.serialize(() => {
  db.run("CREATE TABLE feedback (id INTEGER PRIMARY KEY, feedback TEXT)");
});

app.use(bodyParser.json());
app.use(express.static("public"));

// Endpoint para enviar feedback
app.post("/submit-feedback", (req, res) => {
  const { feedback } = req.body;
  db.run(
    "INSERT INTO feedback (feedback) VALUES (?)",
    [feedback],
    function (err) {
      if (err) {
        console.error(err.message);
        res.json({ success: false });
      } else {
        res.json({ success: true });
      }
    }
  );
});

// Endpoint para obter feedback
app.get("/get-feedback", (req, res) => {
  db.all("SELECT feedback FROM feedback", [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.json({ feedback: [] });
    } else {
      res.json({ feedback: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
