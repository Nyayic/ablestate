import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Employers from './pages/Employers/Employers';
import Developers from './pages/Developers/Developers';
import Premium from './pages/Premium/Premium';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MyProfile from './pages/Developers/MyProfile';

import React, { useState } from 'react';

const App = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
    
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about' exact >
          <About/>
        </Route>
       
        <Route path='/developers' component={Developers} />
        <Route path='/employers' component={Employers} />
        <Route path='/contact-us' component={Contact} /> 
        <Route path='/premium' component={Premium} />
        <Route path='/news' component={News}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={Signup} />
        <Route path='/my-profile' exact component={MyProfile} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
