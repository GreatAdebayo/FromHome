import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
 Nav,
 NavbarContainer,
 NavLogo,
 MobileIcon,
 NavMenu,
 NavItem,
 NavLinks,
 NavBtn,
NavBtnLink,
 NavRoute
} from './NavElements';
const Navbar = ({ toggle }) => {
 return (
  <>
    <Nav>
     <NavbarContainer>
     <NavLogo to="/" style={{ textDecoration: 'none' }}>
    <p className="logo"><i class="fas fa-book-reader"></i> FromHome</p> 
       </NavLogo>
     <MobileIcon onClick={toggle}>
       <FaBars />
     </MobileIcon>
     <NavMenu>
      <NavItem>
       <NavLinks to="about">About</NavLinks>
      </NavItem>
      <NavItem>
       <NavRoute to="/courses">Courses</NavRoute>
      </NavItem>
      <NavItem>
      <NavRoute to="/dashboard">Dashboard</NavRoute>
      </NavItem>
       <NavItem>
       <NavRoute to="/login">Login</NavRoute>
      </NavItem>
      <NavItem>
       <NavRoute to="/signup">Signup</NavRoute>
      </NavItem>
      <NavItem>
       <NavLinks to="footer"> Contact </NavLinks>
      </NavItem>
     </NavMenu>
     <NavBtn>
      <NavBtnLink  style={{ textDecoration: 'none' }} to="/dashboard/createcourse">Create a Course <i class="fal fa-arrow-right"></i></NavBtnLink>
     </NavBtn>
     </NavbarContainer>

   </Nav>

   </>
 )
}

export default Navbar;
