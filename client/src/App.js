import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Static_Components/navbar/Navbar'
import Footer from './Static_Components/footer/Footer'
import Home from './Page_Components/home/Home'
import Trade from './Page_Components/trade/Trade'
import Report from './Page_Components/report/Report'

function App() {
  return (
    <Router>
      <div className="app" id="app-container">
        <Navbar />
        <main id="main-container">
          <Route path="/" exact component={Home} />
          <Route path="/trade" component={Trade} />
          <Route path="/report" component={Report} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
