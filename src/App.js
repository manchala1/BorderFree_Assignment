import "./App.css";
import Newhome from "./components/newhome";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Summary from "./components/summary";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Newhome} />
            <Route exact path="/subhome" component={Summary} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
