import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import Perfil from './pages/perfil';
import ResumoPage from './pages/resumo';
import Portf from './pages/portf';
import Habi from './pages/habi';


export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route  path="/perfil" component={Perfil} />
      <Route  path="/resumo" component={ResumoPage} />
      <Route path="/portifolio" component={Portf} />
      <Route path="/habilidade" component={Habi} />
    </Router>
  );
}