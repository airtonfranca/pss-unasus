# PROVA PRÁTICA

Tecnologias usada:

- [React](https://reactjs.org) e [React Router](https://reacttraining.com/react-router/) para o Frontend
- [Express](http://expressjs.com/) e [Node](https://nodejs.org/en/) para o Backend
- [MongoDB](https://www.mongodb.com/) para o Banco de Dados
- [Redux](https://redux.js.org/basics/usagewithreact) para o Gerenciamento de Estado entre os componentes React

## Configuração

Se você tem seu próprio `MONGOURI` do seu Banco de Dados [mLab](http://mlab.com), edite o arquivo `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "SUA_MONGOURI_AQUI",
  secretOrKey: "secret",
};
```

Atualmente o arquivo contém meus dados [mLab](http://mlab.com), você pode usar a ferramenta [Postman](https://www.postman.com) para testar a API endpoint e erros:

```javascript
Tipo de requisição: POST
URL Login: http://localhost:5000/api/users/login
URL Nova Conta: http://localhost:5000/api/users/register
```

## Instalação Local

```javascript
Instalar dependências para servidor e cliente
// npm install && npm run client-install

Executar cliente e servidor simultaneamente
// npm run dev

// Servidor executa em http://localhost:5000 e Cliente em http://localhost:3000
```
