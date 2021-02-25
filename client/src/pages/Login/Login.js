import React, { useState } from 'react';

import BNavbar from '../../components/Navbar/Navbar';
import Logo from '../../images/logo.png';
import './Login.css';

import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

function Login ({setToken}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    return(
        <div className="container-fluid bg-light">
            <BNavbar/>
            <div className="row bg-light">
                <div className="container mt-4 mb-4 jumbotron bg-white">
                    <div className="row login-row">
                        <div className="col-md-12">
                            <img src={Logo} alt="Logo" className="logo"/>
                            <h1 className="header-text">Welcome Back</h1>
                            <input type="button" className="form-control fa fa-google" value="Sign in with google"/> <br/>
                            <input type="button" className="form-control" value="Sign in with github"/>
                        </div>
                        
                            <div className="col-sm-5">
                                <hr/>
                            </div>
                            <div className="col-sm-2">
                                <b className="text-center">OR</b>
                            </div>
                            <div className="col-sm-5">
                                <hr/>
                            </div>

                        <form className="col-md-12" onSubmit={handleSubmit}>
                            <input type="text" className="form-control" 
                            placeholder="Enter your email address"
                            onChange={e => setUserName(e.target.value)}/> <br/>
                            
                            <input type="password" className="form-control" 
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)}/> <br/>

                            <input type="button" className="form-control sign-in-btn" value="Sign In"/>

                            <div className="login-footer">
                            <a href="/reset-password" className="forgot-password">Forgort Password?</a>
                            <h3 className="new-to">
                                New to Ablestate?
                                <a href="/sign-up"> Join Now!</a>
                            </h3>
                            <hr/>
                                <div>
                                    <p className="consent">
                                    By signing in to your account, you agree to Ablestate’s Terms of Service and consent to our 
                                    <a href="/cookies-policy"> Cookie Policy</a> and <a href="/privacy-policy">Privacy Policy</a>.
                                    </p>

                                </div>
                            </div>
                        </form>

                    </div>
                    
                </div>
            </div>
        </div>
     );
 }

 Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;