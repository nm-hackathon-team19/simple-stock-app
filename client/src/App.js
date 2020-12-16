import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navigation from './Static_Components/Navigation'
// import Footer from './Static_Components/Footer'
import Home from './Page_Components/home/Home'
import Trade from './Page_Components/trade/Trade'
import Portfolio from './Page_Components/portfolio/Portfolio'
import Confirm from './Page_Components/trade/Confirm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HoldingProvider } from './HoldingContext'

function App() {
  return (
    <Router>
      <div className="app" id="app-container">
        <Navigation />
        <main id="main-container">
          <HoldingProvider>
            <Route path="/" exact component={Home} />
            <Route path="/main*" component={Trade} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/confirm" component={Confirm} />
          </HoldingProvider>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
