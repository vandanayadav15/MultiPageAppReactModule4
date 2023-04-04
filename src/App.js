import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./Components/Home";
import Detail from "./Components/Details";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
     <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/item/:id" component={Detail} />
      </Switch>
      </Router>
      </Provider>
  );
}

export default App;
