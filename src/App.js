import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";

function App() {
  return (
    <div class="container">
      <Switch>
        <Route exact path="" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
