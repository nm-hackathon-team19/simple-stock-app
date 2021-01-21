import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/index.css';
import Navigation from './components/Navigation'
import Home from './screens/HomeScreen'
import TradeScreen from './screens/TradeScreen'
import InstructionsScreen from './screens/InstructionsScreen'
import PortfolioScreen from './screens/PortfolioScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './protected-routes/ProtectedRoute'
import { UserNameProvider } from './context/UserNameContext'

const App = () => {
  return (
    <Router>
      <UserNameProvider>
        <div className="app" id="app-container">
          <Navigation />
          <main id="main-container">
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/main" component={TradeScreen} />
            <ProtectedRoute path="/portfolio" component={PortfolioScreen} />
            <ProtectedRoute path="/instructions" component={InstructionsScreen} />
          </main>
        </div>
      </UserNameProvider>
    </Router>
  );
}

export default App;
