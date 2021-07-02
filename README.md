# TELA DE LOGIN

Tecnologias usada:

- [React](https://reactjs.org) e [React Router](https://reacttraining.com/react-router/) para o Frontend
- [Express](http://expressjs.com/) e [Node](https://nodejs.org/en/) para o Backend
- [MongoDB](https://www.mongodb.com/) para o Banco de Dados
- [Redux](https://redux.js.org/basics/usagewithreact) para o Gerenciamento de Estado entre os componentes React

## Configuração

Instale o [NODE.js](https://nodejs.org/en/) e o [MongoDB](https://www.mongodb.com/try/download/community) se já não o estiverem instalados.

Use sua própria `MONGOURI` do seu Banco de Dados [mLab](http://mlab.com), editando o arquivo `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "SUA_MONGOURI_AQUI",
  secretOrKey: "secret",
};
```

Atualmente o arquivo contém meus dados [mLab](http://mlab.com), você pode usar a ferramenta [Postman](https://www.postman.com) para testar a API endpoint:

```javascript
Tipo de requisição: POST
URL Login: http://localhost:5000/api/users/login
URL Nova Conta: http://localhost:5000/api/users/register
```

## Instalação Local

```javascript
Instalar dependências para servidor e cliente
// npm install && cd client && npm install

*Verifique se o Termonal está no diretório principal antes de rodar o próximo comando*
Executar cliente e servidor simultaneamente
// npm run dev

// Servidor executa em http://localhost:5000 e Cliente em http://localhost:3000
```
