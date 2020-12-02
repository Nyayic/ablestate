import React from 'react';
import GlobalStyle from './globalStyles';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Employers from './pages/Employers/Employers';
import Developers from './pages/Developers/Developers';
import Premium from './pages/Premium/Premium';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/about' component={About} />
        <Route path='/developers' component={Developers} />
        <Route path='/employers' component={Employers} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/premium' component={Premium} />
        <Route path='/news' component={News} />
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
