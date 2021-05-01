import React from 'react';
import {FaSave, FaUserAlt, FaWallet}  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IoMdLogOut} from 'react-icons/io';

export const SidebarData = [
  {
    title: 'My Learning',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Saved Courses',
    path: '/dashboard/savedcourses',
    icon: <FaSave style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Posted Courses',
    path: '/dashboard/postedcourses',
    icon: <IoIcons.IoMdPeople  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'My Profile',
    path: '/dashboard/myprofile',
    icon: <FaUserAlt  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/dashboard/payment',
    icon: <FaWallet  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
 },
 {
  title: 'Logout',
  path: '/login',
  icon: <IoMdLogOut  style={{color:'#3ac162'}}/>,
  cName: 'nav-text'
}
];
