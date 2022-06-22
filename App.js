import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import logo_iTv from './images/logo_iTv.jpg';
import WelcomeComponent from'./Welcome';
import HomeComponent from './Home';
import ShowsComponent from './Shows';
import SubscriptionComponent from './Subscription';

function App() {
  return (
    <React.Fragment>
      <Router>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
         <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo_iTv} className="imageStyle" alt="Not Found"></img>
            <strong>iTV</strong>
          </Link> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link text-light" to="/home">Home <span className="sr-only"></span></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
        
            {/* Configure route paths here DONE*/}
          <Switch>
            <Route exact path="/" component={WelcomeComponent}></Route>
            <Route path="/home"component={HomeComponent}></Route>
            <Route path="/shows" component={ShowsComponent}></Route>
            <Route path="/subscribe" component={SubscriptionComponent}></Route>
          </Switch>

        </div>
      </Router>
    </React.Fragment>
  )
}

export default App