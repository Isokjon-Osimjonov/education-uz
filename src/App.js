import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

// @routes =>

import Home from "./routes/home/Home";
import Admin from "./routes/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
