import { Link as LinkR  } from 'react-router-dom';
import { Link as LinkS  } from 'react-scroll';

import styled from 'styled-components';

export const Nav = styled.nav`
height : 60px;
margin-top: -80px;
display : flex;
justify-content : center;
align-items : center;
font-size : 1rem;
position: sticky;
top: 0;
background: #fff;
transition: all 0.5s;
z-index: 997;
padding: 15px 0;
box-shadow: 0px 0 18px rgba(55, 66, 59, 0.08);


@media screen and (max-width: 960px){
 transition: 0.8 all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 30%);
font-size: 1.5rem;
cursor: pointer;
color: #444444;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style:none;
text-align: center;
margin-right: -22px;
@media screen and (max-width: 768px){
 display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
display: flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100px;
cursor: pointer;
font-family: "Poppins", sans-serif;
justify-content: space-between;
padding: 10px 0 10px 30px;
font-size: 15px;
font-weight: 500;
color: #37423b;
white-space: nowrap;
transition: 0.3s;

&:hover {
 transition: all 0.2s ease-in-out;
  color: #3ac162;
  text-decoration:none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 768px){
 display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
margin-left: 22px;
background: #5fcf80;
color: #fff;
padding: 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: 14px;
display: inline-block;
font-weight:bold;

&:hover {
 transition: all 0.2s ease-in-out;
 background: #3ac162;
  color: #fff;
}
`

export const NavRoute = styled(LinkR)`
display: flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100px;
cursor: pointer;
font-family: "Poppins", sans-serif;
justify-content: space-between;
padding: 10px 0 10px 30px;
font-size: 15px;
font-weight: 500;
color: #37423b;
white-space: nowrap;
transition: 0.3s;

&:hover {
 transition: all 0.2s ease-in-out;
  color: #3ac162;
  text-decoration:none;
}
`