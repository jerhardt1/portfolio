import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/home";

function App() {
  return (
    <div class="container">
      <ToastContainer></ToastContainer>

      <Switch>
        <Route exact path="" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
