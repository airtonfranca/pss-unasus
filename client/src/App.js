import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Verifica o token para manter o usuário logado
if (localStorage.jwtToken) {
  // Definir autenticação do token
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decodificar o token e obter informações do usuário
  const decoded = jwt_decode(token);
  // Definir usuário e isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Verificar o token de expiração
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Deslogar usuário
    store.dispatch(logoutUser());
    // Redirecionar para login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="form-container">
            <div className="form-content-left">
              <img
                className="form-img"
                src="img/fundo.jpg"
                alt="astronauta-msg"
              />
            </div>
            <div className="form-content-right">
              <div>
                <img className="form-img-2" src="img/logo.jpg" alt="logo" />
              </div>
              <div className="row">
                <div className="col s12 center-align nav-link">
                  <div className="col s6">
                    <Link
                      to="/login"
                      style={{
                        width: "250px",
                        letterSpacing: "1.5px",
                      }}
                      className="btn  btn-large btn-flat waves-effect black-text"
                    >
                      LOGIN
                    </Link>
                  </div>
                  <div className="col s6">
                    <Link
                      to="/register"
                      style={{
                        width: "250px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                      }}
                      className="btn btn-large btn-flat waves-effect black-text"
                    >
                      NOVO USUÁRIO
                    </Link>
                  </div>
                </div>
                <br />
              </div>
              <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
