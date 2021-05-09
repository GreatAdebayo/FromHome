import React, { useState } from 'react';
import { Button } from '../ButtonElement';

import {
 SidebarContainer,
 Icon,
 CloseIcon,
 SidebarWrapper,
 SidebarMenu,
 SidebarLink,
 SidebarRoute
} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
 const [hover, setHover] = useState(false);

 const onHover = () => {
  setHover(!hover)
 }
 return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
   <Icon onClick={toggle}>
    <CloseIcon/>
   </Icon>
   <SidebarWrapper>
    <SidebarMenu>
     <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
     <SidebarRoute to="/courses" onClick={toggle}>Courses </SidebarRoute>
     <SidebarRoute to="/dashboard" onClick={toggle}>Dashboard</SidebarRoute>
     <SidebarRoute to="/login" onClick={toggle}>Login </SidebarRoute>
     <SidebarRoute to="/signup" onClick={toggle}>Signup </SidebarRoute>
     <SidebarLink to="footer" onClick={toggle}>Contact </SidebarLink>
     <SidebarLink onClick={toggle}>
     <Button to="/dashboard/createcourse"  onMouseEnter={onHover} onMouseLeave={onHover}>
     <>Create a Course <i class="fal fa-arrow-right"></i></> 
     </Button>
     </SidebarLink>

    
    
    </SidebarMenu>

   </SidebarWrapper>
  </SidebarContainer>
 )
}

export default Sidebar;
