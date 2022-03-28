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
import Contact from "./routes/contact/Contact";
import Quiz from "./routes/quiz/Quiz";
import Vocabulary from "./routes/vocabulary/Vocabulary";
import Materials from "./routes/materials/Materials";
import Beginner_A1 from "./routes/grammar/grammar_levels/beginnerA1/Beginner_A1";

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
          <Route path="/contact" component={Contact} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/vocabulary" component={Vocabulary} />
          <Route path="/materials" component={Materials} />
          <Route path="/beginner" component={Beginner_A1} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
