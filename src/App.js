import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// @routes =>

import Home from "./routes/home/Home";
import Admin from "./routes/admin/Admin";
import Header from "./components/header/Header";
import Grammar from "./routes/grammar/Grammar";
import Footer from "./components/footer/Footer";
import Ielts from "./routes/ielts/Ielts";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/grammar" component={Grammar} />
          <Route path="/admin" component={Admin} />
          <Route path="/ielts" component={Ielts} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
