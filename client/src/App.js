import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Navigation from './Static_Components/Navigation'
// import Footer from './Static_Components/Footer'
import Home from './Page_Components/home/Home'
import Trade from './Page_Components/trade/Trade'
import Portfolio from './Page_Components/portfolio/Portfolio'
import Confirm from './Page_Components/trade/Confirm'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './ProtectedRoute'
import { UserNameProvider } from './UserNameContext'
// import { HoldingsAmountProvider } from './HoldingsAmountContext'

const App = () => {
  return (
    <Router>
      <UserNameProvider>
        <div className="app" id="app-container">
          <Navigation />
          <main id="main-container">
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/main" component={Trade} />
            <ProtectedRoute path="/portfolio" component={Portfolio} />
            <Route path="/confirm" component={Confirm} />
          </main>
          {/* <Footer /> */}
        </div>
      </UserNameProvider>
    </Router>
  );
}

export default App;
