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
    title: 'Edit Course',
    icon: <i class="fas fa-edit" style={{color:'#3ac162'}}></i>,
    cName: 'nav-text'
  },
  {
    title: 'My Students',
    icon: <IoIcons.IoMdPeople  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
 },
  {
    title: `Back to Tutor's portal`,
    path: '/dashboard/createdcourses',
    icon: <IoIcons.IoMdPeople  style={{color:'#3ac162'}}/>,
    cName: 'nav-text'
  }
 

];
