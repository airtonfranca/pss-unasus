const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Converter campos vazios para stringd vaziad, para usar o a função validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  // Verificar nome
  if (Validator.isEmpty(data.name)) {
    errors.name = "Digite o Nome";
  } else if (!Validator.isLength(data.name, { min: 5, max: 50 })) {
    errors.name = "Campo precisa ter 5 ou mais caracteres";
  } 
  // Verificar email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Digite o E-mail";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "E-mail inválido";
  }
  // Verificar senha
  if (Validator.isEmpty(data.password)) {
    errors.password = "Digite uma Senha";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirme sua Senha";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Senha deve ter 6 ou mais caracteres";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Senhas diferentes";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
