
import './style/main.css';
import './style/header.css';
import './style/home.css';
import './style/footer.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sales from './components/Sales/Sales.js';
import Hire from './components/Hire/Hire.js';
import Parts from './components/Parts/Parts.js';
import Services from './components/Services/Services.js';
import Finance from './components/Finance/Finance.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path="/sales">
          <Sales />
        </Route>
        <Route exact path="/hire">
          <Hire />
        </Route>
        <Route exact path="/parts">
          <Parts />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/finance">
          <Finance />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
