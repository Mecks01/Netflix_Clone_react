import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.page';
import Login from "./pages/LoginPage/LoginPage.page";

function App() {
  return (
    <Router>
      
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
      
    </Router>
  );
}

export default App;
