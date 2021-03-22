const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../models/User");

// @Rota POST api/users/register
// @Descrição Registro de Usuário
// @Acesso Público
router.post("/register", (req, res) => {
  // Validação do Formulário
  const { errors, isValid } = validateRegisterInput(req.body);
  // Verifica Validação
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "E-mail já cadastrado" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Hash senha antes de salvar do Banco de dados
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
// @Rota POST api/users/login
// @Descrição Login de usuário e retorna JWT token
// @access Public
router.post("/login", (req, res) => {
  // Validação do Formulário
  const { errors, isValid } = validateLoginInput(req.body);
  // Verifica Validação
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Buscar usuário pelo email
  User.findOne({ email }).then((user) => {
    // Verifica se o usuário existe
    if (!user) {
      return res.status(404).json({ emailnotfound: "E-mail não cadastrado" });
    }
    // Verifica senha
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Combinação com usuário
        // Criação JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Enviar token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926,
            // 1 ano formatado em segundis segundos
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ passwordincorrect: "Senha incorreta" });
      }
    });
  });
});

module.exports = router;
