import React, { useEffect }from 'react'
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import SideNavPage from '../components/Dashboardnav.js';


const Toast = Swal.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 500,
 timerProgressBar: true,
 didOpen: (toast) => {
 toast.addEventListener('mouseenter', Swal.stopTimer)
 toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})

const Dashboard = () => {
 let history = useHistory();
 useEffect(() => {
  let token = localStorage.getItem('Token');
  axios.post(`${Baseurl}profile.php`, JSON.stringify(token)).then(res => {
   if (res.status == 200) {
    let profileResponse = res.data.UserInfo;
    console.log(profileResponse) 
   }

  }).catch(function (error){
   if (error.response) {
    Toast.fire({
     icon: 'info',
     title: 'Session expired'
     })
   setTimeout(() => history.push("/login"), 500);
  }
  })
  
  });
 return (
  <div>
   <p>dashboard</p>
  </div>
 )
}

export default Dashboard
