import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

 
  const showSidebar = () => setSidebar(!sidebar);
  
 
  return (
    <>
      <IconContext.Provider value={{ color: '#444444' }}>
        <div className='navbar fixed-top'>
      <a className='menu-bars' style={{textDecoration:'none'}}>
     <p className="logo">  <FaIcons.FaBars onClick={showSidebar} /> <i class="fas fa-book-reader ml-4"></i> FromHome</p>
          </a>
        </div>
        <nav className={sidebar ? 'nav-menu act' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} style={{textDecoration:'none'}}>
                    {item.icon}
                    <span className="side-icon">{item.title}</span>
                  </Link>
                </li>
             
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;