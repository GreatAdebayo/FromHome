import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Details from './Details';
import Files from './Files';
import Sections from './Sections';
import Howitworks from './Howitworks';
import Swal from 'sweetalert2'


const Createcourse = () => {
 
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
          <h3>Tutors Portal</h3>
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
  <Link to="/dashboard/createcourse/details" class="nav-link txt" aria-current="page"  style={{color:'#5fcf80', fontWeight:'700'}}>DETAILS</Link>
   </li>
   <li class="nav-item">
  
   <Link to="/dashboard/createcourse/section" class="nav-link txt" style={{color:'#5fcf80', fontWeight:'700'}} >SECTIONS</Link>
  
  </li>
  <li class="nav-item">
  <Link class="nav-link txt" to="/dashboard/createcourse/files"  style={{color:'#5fcf80', fontWeight:'700'}} >FILES</Link>
  {/* <Link class={"nav-link txt " + (isActive3 ? 'active': null)} to="/dashboard/createcourse/files"  style={{color:'#5fcf80', fontWeight:'700'}} onClick={handleClick3}>FILES</Link> */}
  </li>
  </ul>
             
      <div className="mt-4 justify-content-center">
      <Switch>
      <Route path="/dashboard/createcourse/details">
      <Details/>
      </Route>
                
      <Route path="/dashboard/createcourse/section">
      <Sections/>
      </Route>
                 
      <Route path="/dashboard/createcourse/files">
      <Files/>
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
