// import { FaBars } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link  as LinkS} from 'react-scroll'; //link s for scroll

import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  z-index: 10;
  top:0;
  font-size: 1rem;
  align-items: center;
  // margin-top: -80px;
  position:sticky;

  @media screen and (max-width: 960px){
    transition:0.8s all ease; 
  }
 
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 20px;
  max-width 1100px;
`
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pounter;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width:768px){
    display: block;
    position: absolute;
    top; 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -22px;
  text-align: center;

 @media screen and (max-width: 768px) {
   display: none;
 }
`;

export const NavItems = styled.li`
 height: -80px;
`


export const NavLinks = styled(LinkS)`
   padding: 0 1rem;
   color: #fff;
   cursor: pointer;
   text-decoration: none;
   display: flex;

  &.active {
    border-bottom: 3px sloid #01bf71;
   }
 `;

 export const NavBtn = styled.nav`
 display: flex;
 align-items: center;

 @media screen and (max-width: 768px){
   display: none;
 }
 `;

 export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
&:hover {
  background: #fff;
  color: #010606;
}
 `