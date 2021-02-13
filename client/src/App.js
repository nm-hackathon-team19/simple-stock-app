import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/index.css';
import './style/home.css';
import './style/mobile.css';
import './style/beginners.css';
import './style/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import TradeScreen from './screens/TradeScreen';
import BeginnersScreen from './screens/BeginnersScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import ProtectedRoute from './protected-routes/ProtectedRoute';
import { UserNameProvider } from './context/UserNameContext';

const App = () => {
  return (
    <Router>
      <UserNameProvider>
        <div className="app" id="app-container">
          <Navigation />
          <main id="main-container">
            <Route path="/" exact component={HomeScreen} />
            <ProtectedRoute path="/main" component={TradeScreen} />
            <ProtectedRoute path="/portfolio" component={PortfolioScreen} />
            <ProtectedRoute path="/instructions" component={BeginnersScreen} />
          </main>
        </div>
      </UserNameProvider>
    </Router>
  );
};

export default App;
