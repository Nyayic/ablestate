import React, {Component} from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component{
    //menu icon state
    state = {clicked: false}
    //handel menu click function
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ablestate</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* to change state of the menu when clicked */}
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                
                {/* Check if navmenu is clicked by adding a state in the ul */}
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                   
                </ul>
            </nav>
        )
    }
}

export default Navbar;