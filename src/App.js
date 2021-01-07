import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div class="container">
      {/* <Navbar></Navbar> */}
      <Switch>
        <Route exact path="" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
