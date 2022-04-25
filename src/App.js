import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutApi from './components/pages/AboutApi'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import Home from './components/pages/Home'
import KnowUs from './components/pages/KnowUs'
import OurTeam from './components/pages/OurTeam'
import OurWork from './components/pages/OurWork'
import Services from './components/pages/Services'
import Testimonials from './components/pages/Testimonials'
import TravelDome from './components/pages/TravelDome'


const App = () =>{
return (

  <Router>
  <Navbar />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/AboutApi" exact component={AboutApi} />
    <Route path="/ContactUs" exact component={ContactUs} />
    <Route path="/AboutUs" exact component={AboutUs} />
    <Route path="/KnowUs" exact component={KnowUs} />
    <Route path="/OurTeam" exact component={OurTeam} />
    <Route path="/OurWork" exact component={OurWork} />
    <Route path="/Services" exact component={Services} />
    <Route path="/Testimonials" exact component={Testimonials} />
    <Route path="/TravelDome" exact component={TravelDome} />
  </Switch>
  </Router>
  
  );
}
export default App
