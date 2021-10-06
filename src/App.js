import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer.js'
import Home from './components/home'
import Register from './components/register';
import Contact from './components/contact';
import SchedulePricing from './components/schedulePricing';
import Glimpse from './components/glimspe';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='margined'>
          <Header/>
          <div className='content'>
            <Switch>
                <Route path='/Register' component={Register} />
                <Route path='/info' component={SchedulePricing} />
                <Route path='/glimpse' component={Glimpse} />
                <Route path='/Contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
          </div>
        </div>
        <Footer />
          
      </div>
    </Router>
  );
}

export default App;
