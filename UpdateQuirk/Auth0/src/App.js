// App.js
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import ReceptorDatos from './ReceptorDatos';

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import MisCircuitos from './views/MisCircuitos';
import Resultados from './views/Resultados'; 
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import { UserEmailProvider } from './components/UserEmailContext';
// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <UserEmailProvider> {/* Aquí envuelves todo el componente App con el proveedor de contexto */}
      <Router history={history}>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/mis-circuitos" component={MisCircuitos} /> {/* Esta es la ruta para MisCircuitos */}
              <Route path="/resultados" component={Resultados} /> {/* Esta es la ruta para Resultados */}
              <Route path="/profile" component={Profile} />
              <Route path="/receptor-datos" component={ReceptorDatos} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    </UserEmailProvider>
  );
};

export default App;
