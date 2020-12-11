import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cadastro" exact component={() => <Cadastro />} />
      <Route path="/" exact component={() => <Login />} />
      <Route path="/home" exact component={() => <Home />} />
    </Switch>
  );
};

export default Routes;
