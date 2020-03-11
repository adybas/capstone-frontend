import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Switch>
        {/* < Route Home /> */}
        <Route exact path="/signup" component={SignUp} />
        < Route path="/" component={Home} />
      </Switch>
      < Footer />
    </div>
  );
}

export default App;
