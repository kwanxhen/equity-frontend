import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import pages
import Home from "./pages/Home";
import MyWallet from "./pages/MyWallet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/wallet" component={MyWallet} />
      </Switch>
    </Router>
  );
}

export default App;
