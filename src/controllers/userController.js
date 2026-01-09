// Controller de usuários

exports.createUser = (req, res) => {
  res.status(201).json({
    message: "Usuário criado com sucesso"
  });
};

exports.getUsers = (req, res) => {
  res.status(200).json({
    message: "Lista de usuários"
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    message: "Usuário atualizado com sucesso"
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: "Usuário deletado com sucesso"
  });
};
