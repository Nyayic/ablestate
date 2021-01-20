import React from 'react';
import Logo from '../../images/logo.png';
import './Signup.css';

 function Signup (){
     return(
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="container mt-4 mb-4 jumbotron bg-white">
                    <div className="row login-row">
                        <div className="col-md-12">
                            <img src={Logo} alt="Logo" className="logo"/>
                            <h1 className="header-text">Create an Account</h1>
                            <input type="button" className="form-control" value="Sign up with Google"/> <br/>
                            <input type="button" className="form-control" value="Sign up with Github"/>
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

                        <div className="col-md-12">                           
                            <input type="text" className="form-control" placeholder="Full name"/> <br/>
                            <input type="text" className="form-control" placeholder="Enter your email address"/> <br/>
                            <input type="password" className="form-control" placeholder="Enter your password"/> <br/>
                            <input type="password" className="form-control" placeholder="Confirm your password"/> <br/>
                            <input type="button" className="form-control sign-in-btn" value="Create Account"/>

                            <div className="login-footer">
                            <h3 className="new-to">
                                Already a member?
                                <a href="/login"> Sign In</a>
                            </h3>
                            <hr/>
                                <div>
                                    <p className="consent">
                                    By clicking "Create Account", you agree to Ablestate’s Terms of Service and consent to our 
                                    <a href="/cookies-policy"> Cookie Policy</a> and <a href="/privacy-policy">Privacy Policy</a>.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
     );
 }

 export default Signup;