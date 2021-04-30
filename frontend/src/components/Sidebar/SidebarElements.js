import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link } from 'react-router-dom';


export const SidebarContainer = styled.aside`
position: fixed;
z-index:999;
width: 100%;
height:100%;
background: #fff;
display:grid;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
padding-top: 40px;
box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
opacity: 0.9;
 `


export const CloseIcon = styled(FaTimes)`
color: #444444;

`

export const Icon = styled.div`
position: absolute;
top: 1rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 50px);
text-align:center;

@media screen and (max-width: 480px){
 grid-template-rows: repeat(6, 80px);
}

`
export const SidebarLink = styled(LinkS)`
display: flex;
align-items:center;
justify-content:left;
font-size: 16px;
text-decoration: none;
list-style : none;
font-family: "Poppins", sans-serif;
text-decoration: none;
color: #37423b;
cursor: pointer;
transition: 0.5s;
&:hover{
 color: #01bf71;
 transition: 0.2s ease-in-out;
 text-decoration:none;
}
`

export const SidebarRoute = styled(Link)`
display: flex;
align-items:center;
justify-content:left;
font-size: 16px;
text-decoration: none;
list-style : none;
font-family: "Poppins", sans-serif;
text-decoration: none;
color: #37423b;
cursor: pointer;
transition: 0.5s;
&:hover{
 color: #01bf71;
 transition: 0.2s ease-in-out;
 text-decoration:none;
}
`