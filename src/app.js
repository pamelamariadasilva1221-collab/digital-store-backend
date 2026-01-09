const express = require("express");
const app = express();

// Importa as rotas
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// Usa as rotas
app.use("/api", userRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API funcionando corretamente 🚀"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
