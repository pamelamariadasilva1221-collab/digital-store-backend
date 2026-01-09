const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Criar usuário
router.post("/users", userController.createUser);

// Listar usuários
router.get("/users", userController.getUsers);

// Atualizar usuário
router.put("/users/:id", userController.updateUser);

// Deletar usuário
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
