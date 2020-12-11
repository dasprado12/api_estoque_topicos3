import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <Login />} />
      <Route path="/home" exact component={() => <Home />} />
    </Switch>
  );
};

export default Routes;
