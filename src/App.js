import "./App.css";
import { Header } from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path={"/checkout"}>
            <Header />
            <h1>I AM A CHECKOUT</h1>
          </Route>
          <Route path={"/"}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
