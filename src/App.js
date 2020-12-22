import BNavbar from './components/Navbar/Navbar'
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


const App = () => {
  return (
    <Router>
    
      <BNavbar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/developers' component={Developers} />
        <Route path='/employers' component={Employers} />
        <Route path='/contact-us' component={Contact} /> 
        <Route path='/premium' component={Premium} />
        <Route path='/news' component={News}/>
        <Route path='/login' component={Login}/>
        <Route path='/sign-up' component={Signup} />
      </Switch>
      <Footer />
      
    </Router>
  )
}

export default App
