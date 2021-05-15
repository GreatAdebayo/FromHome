import React from 'react';
import {FaSave, FaUserAlt, FaWallet}  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IoMdLogOut} from 'react-icons/io';

export const PreviewData = [
 {
  title: 'Preview',
  path: '/preview',
  icon: <i class="fas fa-search" style={{color:'#3ac162'}}></i>,
  cName: 'nav-text'
},
  {
    title: 'Add Files',
    path: '/preview/files',
    icon: <i class="fal fa-paperclip" style={{color:'#3ac162'}}></i>,
    cName: 'nav-text'
  },
  {
    title: 'Statistics',
    path: '/dashboard',
    icon: <i class="fas fa-chart-pie" style={{color:'#3ac162'}}></i>,
    cName: 'nav-text'
  },
  {
    title: 'Edit Course',
    path: '/dashboard/createcourse',
    icon: <i class="fas fa-edit" style={{color:'#3ac162'}}></i>,
    cName: 'nav-text'
  },
  {
    title: 'My Students',
    path: '/dashboard/createdcourses',
    icon: <IoIcons.IoMdPeople  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
 },
 {
  title: 'See How it Looks',
  path: '/dashboard/payment',
  icon: <i class="fas fa-eye" style={{color:'#3ac162'}}></i>,
  cName: 'nav-text'
},
  {
    title: `Back to Tutor's portal`,
    path: '/dashboard/createdcourses',
    icon: <IoIcons.IoMdPeople  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
  }
 

];
