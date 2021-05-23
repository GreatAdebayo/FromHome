import React from 'react'
import { Link } from 'react-router-dom';


const Previewdetails = (props) => {
 return (
  <div>
<main id="main">
    <section id="course-details" class="course-details">
         <div class="container" data-aos="fade-up">
         {/* <div class="section-title">
         <h2>React Courses</h2>
         <p>React JS</p>
         </div> */}
        <Link to="/dashboard/createdcourses" style={{textDecoration: 'none', color: '#5fcf80'}}> <p><i class="fas fa-long-arrow-alt-left"></i> Back </p></Link>
        <div class="row">
       <div class="col-lg-8">
        {props.course.category == 'vue' ? <i class="fab fa-vuejs fa-5x" style={{ color: "#41B883" }}></i> :
        props.course.category == 'angular' ? <i class="fab fa-angular fa-5x" style={{ color: "#C3002F" }}></i> :
        props.course.category == 'react' ? <i class="fab fa-react fa-5x" style={{ color: " #61DBFB" }}></i>
        :props.course.category == 'html' ? <i class="fab fa-html5 fa-5x" style={{ color: '#ffbb2c' }}></i> :
        props.course.category == 'bootstrap' ? <i class="fab fa-bootstrap fa-5x" style={{ color: "#8513FB" }}></i> :
        props.course.category == 'php' ? <i class="fab fa-php fa-5x" style={{ color: "#8892BF" }}></i> :
        props.course.category == 'laravel' ? <i class="fab fa-laravel fa-5x" style={{ color: "#FF2E20" }}></i> :
        props.course.category == 'wordpress' ? <i class="fab fa-wordpress fa-5x" style={{ color: "#003C56" }}></i> :
        props.course.category == 'git' ? <i class="fab fa-git fa-5x" style={{ color: "#ffa76e" }}></i> :
        props.course.category == 'graphics design' ? <i class="fas fa-photo-video fa-5x" style={{color: '#5578ff'}}></i>:
        props.course.category == 'others' ?  <i class="fab fa-discourse fa-5x" style={{color: "#29cc61"}}></i>:
        props.course.category == 'andriod development' ?  <i class="fab fa-android fa-5x" style={{color: "#29cc61"}}></i>: null 
        }
       
       <h3 className="text-capitalize">{props.course.title}</h3>
       <p>
          {props.course.description}
            </p>
          </div>
          <div class="col-lg-4">

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Category</h5>
              <p className="text-capitalize"><a>{props.course.category}</a></p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Course Fee</h5>
                 <p>{props.course.cost == 'Free'? 'Free' : <>₦{props.course.cost}</>}</p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Status</h5>
              <p>{props.course.status}</p>
            </div>

         <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Date Created</h5>
              <p>{props.course.date_created}</p>
        </div>
        
         <div class="course-info d-flex justify-content-between align-items-center">
         <Link  style={{ cursor: 'pointer', textDecoration: 'none' }}><h4><i class="fad fa-play"></i> Pause Course</h4></Link>
         <Link to={`/tutorpreview/${props.course.course_code}`} style={{ cursor: 'pointer', textDecoration: 'none' }}><h4><i class="fad fa-play"></i> See Course</h4></Link>
        </div>

          </div>
        </div>
        
      </div>
    </section>
   </main>
   
  </div>
 )
}

export default Previewdetails
