import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../images/logo.png'

import './Footer.css';

function Footer(){
    return(
        <div className="container-fluid footer-div">
            <div className="row">
                <div className="col-sm-3 mt-4">
                    <img src={Logo} className="img-fluid footer-logo" alt="Ablestate Logo"/>
                </div>
                <div className="col-sm-9 pull-right">
                   <div className="row text-light">
                       <div className="col-sm-3 top-footer-section">
                           <p>info@ablestate.com</p>
                       </div>
                       <div className="col-sm-3 top-footer-section">
                           <p>+256 704 255401</p>
                       </div>
                       <div className="col-sm-3 top-footer-section">
                            <i class="fab fa-facebook footer-icons"></i>
                            <i class="fab fa-twitter footer-icons"></i>
                            <i class="fab fa-linkedin footer-icons"></i>
                            <i class="fab fa-youtube footer-icons"></i>
                            <i class="fab fa-tumblr footer-icons"></i>
                       </div>
                    </div>

                </div> 

            </div>

            <hr className="hr-line"></hr>

            <div className="row text-light">
                <div className="col-sm-4 mt-4">
                    <p className="copyright-text">2020 © Ablestate</p>
                </div>
                <div className="col-sm-8 pull-right">
                   <div className="row text-light">
                       <ul>
                           <li>
                               <a href="/about">ABOUT US</a>
                           </li>
                           <li>
                               <a href="/follow">FOLLOW US</a>
                           </li>
                           <li>
                               <a href="/sign-up">HIRE NOW</a>
                           </li>
                           <li>
                               <a href="/contact-us">CONTACT US</a>
                           </li>
                       </ul>
                        
                    </div>

                </div> 

            </div>


        </div>
    )
}

export default Footer;