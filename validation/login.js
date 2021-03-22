const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  // Converter campos vazios para stringd vaziad, para usar o a função validator
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Verificar email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Digite o E-mail";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "E-mail inválido";
  }
  // Verificar senha
  if (Validator.isEmpty(data.password)) {
    errors.password = "Digite a Senha";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
