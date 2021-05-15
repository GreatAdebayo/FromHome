import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Details from './Details';
import Sections from './Sections';
import Howitworks from './Howitworks';
import Swal from 'sweetalert2'


const Createcourse = (props) => {
 
 return ( 
  <div>
   <section id="cta" class="cta mt-5" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '80px 0',
        zIndex: 997
  
      }}>
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Create Course</h3>
      <p> Create your courses, and let millions of students learn from them. </p>
      <Link to="/dashboard/createcourse/howitworks" class="cta-btn" style={{cursor:'pointer'}} >See how it works</Link>
        </div>

      </div>
   </section>

   <section id="about" className="about">
      <div className="container" data-aos="fade-up">

     <div class="row">
      <div className="col" data-aos="fade-left" data-aos-delay="100">
      <div class="section-title mt-3">
       <h2>Create a Course</h2>
   </div>
             
  <ul class="nav nav-pills nav-fill mt-4">
   <li class="nav-item">
  <NavLink to="/dashboard/createcourse/details" class="txt" aria-current="page"  style={{color:'#5fcf80', fontWeight:'700', textDecoration:'none'}} activeStyle={{borderBottomStyle:'solid', borderColor:'#5fcf80', borderWidth:'3px',paddingLeft:'15px', paddingRight:'15px', borderRadius:'3px'}}>DETAILS</NavLink>
   </li>
   <li class="nav-item">
  
   <NavLink to="/dashboard/createcourse/section" class="txt" style={{color:'#5fcf80', fontWeight:'700', textDecoration:'none'}}  activeStyle={{borderBottomStyle:'solid', borderColor:'#5fcf80', borderWidth:'3px',paddingLeft:'15px', paddingRight:'15px',borderRadius:'3px'}}>SECTIONS</NavLink>
  
  </li>
  </ul>
             
      <div className="mt-4 justify-content-center">
      <Switch>
      <Route path="/dashboard/createcourse/details">
      <Details userId={props.userId}/>
      </Route>
                
      <Route path="/dashboard/createcourse/section">
      <Sections/>
      </Route>
  

      <Route path="/dashboard/createcourse/howitworks">
      <Howitworks/>
       </Route>         

                 
      </Switch>
    </div>
             
 
      
      
  </div>
   </div>

    </div>
    
  
   </section>
   
  </div>
 )
}

export default Createcourse;
