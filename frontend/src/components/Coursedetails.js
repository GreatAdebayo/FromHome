import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';  
import { useParams } from "react-router";
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
 

const Coursedetails = () => {
const [isOpen, setIsOpen] = useState(false)
let {course} = useParams();
let history = useHistory();
  
  useEffect(() => {
  axios.post(`${Baseurl}coursedetails.php`, JSON.stringify(course)
  ).then(res => {
    if (res.status == 200) {
    let CourseResponse = res.data.CourseDetails;
    setCourseDetails(CourseResponse);
    localStorage.setItem('courseTitle', JSON.stringify(CourseResponse.title))  
   }
 
  })
  }, [])


  useEffect(() => {
    axios.post(`${Baseurl}attendance.php`, JSON.stringify(course)
    ).then(res => {
      if (res.status == 200) {
        let AttendResponse = res.data
        setAttendance(AttendResponse)
     }
    })
   
  }, [])

  useEffect(() => {
    axios.post(`${Baseurl}getreviews.php`, JSON.stringify(course)
    ).then(res => {
      if (res.status == 200) {
        let getReview = res.data.Reviews
        if (getReview) {
          setGetreview(getReview)
        }
     }
    })
   
  }, [])
  
  const saveCourse = () => {
    if (localStorage.Token) {
      let token = JSON.parse(localStorage.getItem('Token'))
      let saveCourse = {
      token: token, code: courseDetails.course_code, title: courseDetails.title,
      desc: courseDetails.description, tutor: courseDetails.tutor_name, cost: courseDetails.cost
      }
      axios.post(`${Baseurl}savecourse.php`, JSON.stringify(saveCourse)
      ).then(res => {
        if (res.status == 200) {
          let saveCourseResponse = res.data
          if(saveCourseResponse.AlreadySaved) {
            Toast.fire({
              icon: 'info',
              title: 'Course Already Saved'
              }) 
          } else if(saveCourseResponse.CourseSaved){
            Toast.fire({
              icon: 'success',
              title: 'Course Saved'
              })
          }
        }
      }).catch(function (error){
        if (error.response) {
         Toast.fire({
          icon: 'info',
          title: 'Session Expired'
          })
        history.push("/login")
       }
       })
    } else {
      Toast.fire({
        icon: 'info',
        title: 'Login In to Save Course'
        })
      history.push('/login')
    }
  }

const startCourse = () => {
  if (localStorage.Token) {
    let token = JSON.parse(localStorage.getItem('Token'))
    let startCourse = {
    token: token, code: courseDetails.course_code, title: courseDetails.title,
    desc: courseDetails.description, tutor: courseDetails.tutor_name, cost: courseDetails.cost
    }
    axios.post(`${Baseurl}startcourse.php`, JSON.stringify(startCourse)
    ).then(res => {
      if (res.status == 200) {
        let saveCourseResponse = res.data
        if(saveCourseResponse.WelcomeBack) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome Back',
            showConfirmButton: true,
            allowOutsideClick: false,
            confirmButtonText: "Proceed!",
          })
          history.push(`/takecourse/${course}`)
        } else if(saveCourseResponse.HappyLearning){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Happy Learning',
            showConfirmButton: true,
            allowOutsideClick: false,
            confirmButtonText: "Proceed!",
          })
          history.push(`/takecourse/${course}`)
        }
      }
    }).catch(function (error){
      if (error.response) {
       Toast.fire({
        icon: 'info',
        title: 'Session Expired'
        })
      history.push("/login")
     }
     })
  } else {
    Toast.fire({
      icon: 'info',
      title: 'Login In to Start Course'
      })
    history.push('/login')
  }
}
  
const handleReview = (e) => {
  let Review = e.target.value;
  setReview(Review);
}
  
  const submitReview = () => {
    if (localStorage.Token) {
      if (review) {
        let token = JSON.parse(localStorage.getItem('Token'))
        let details = {token: token, code: courseDetails.course_code, content:review}
          axios.post(`${Baseurl}review.php`, details
          ).then(res => {
            let reviewResponse = res.data.ReviewSent
            if (reviewResponse) {
              Toast.fire({
                icon: 'success',
                title: 'Review Sent'
              })
            }
          })
      }
    } else {
      Toast.fire({
        icon: 'info',
        title: 'Login In to Send Review'
      })
      history.push('/login')
    }
}
  
  const [courseDetails, setCourseDetails] = useState({})
  const [attendance, setAttendance] = useState('')
  const [review, setReview] = useState('')
  const [Getreview, setGetreview] = useState([])
const toggle = () => {
   setIsOpen(!isOpen);
  };
 return (
   <div>
     <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle} />
   <main id="main" className="mt-5">
    <section id="course-details" class="course-details">
         <div class="container" data-aos="fade-up">
         <div class="section-title">
         {/* <h2>React Courses</h2> */}
         <p>{courseDetails.category}</p>
         </div>
         <Link to={`/allcourses/${courseDetails.category}`}style={{textDecoration: 'none', color: '#5fcf80'}}> <p><i class="fas fa-long-arrow-alt-left"></i> Back </p></Link>
         <div class="row">
          <div class="col-lg-8">
        {courseDetails.category == 'vue' ? <i class="fab fa-vuejs fa-5x" style={{ color: "#41B883" }}></i> :
         courseDetails.category == 'angular' ? <i class="fab fa-angular fa-5x" style={{ color: "#C3002F" }}></i> :
         courseDetails.category == 'react' ? <i class="fab fa-react fa-5x" style={{ color: " #61DBFB" }}></i>
        :courseDetails.category == 'html' ? <i class="fab fa-html5 fa-5x" style={{ color: '#ffbb2c' }}></i> :
        courseDetails.category == 'bootstrap' ? <i class="fab fa-bootstrap fa-5x" style={{ color: "#8513FB" }}></i> :
        courseDetails.category == 'php' ? <i class="fab fa-php fa-5x" style={{ color: "#8892BF" }}></i> :
        courseDetails.category == 'laravel' ? <i class="fab fa-laravel fa-5x" style={{ color: "#FF2E20" }}></i> :
        courseDetails.category == 'wordpress' ? <i class="fab fa-wordpress fa-5x" style={{ color: "#003C56" }}></i> :
        courseDetails.category == 'git' ? <i class="fab fa-git fa-5x" style={{ color: "#ffa76e" }}></i> :
        courseDetails.category == 'graphics design' ? <i class="fas fa-photo-video fa-5x" style={{color: '#5578ff'}}></i>:
        courseDetails.category == 'others' ?  <i class="fab fa-discourse fa-5x" style={{color: "#29cc61"}}></i>:
        courseDetails.category == 'andriod development' ?  <i class="fab fa-android fa-5x" style={{color: "#29cc61"}}></i>: null              
        }
         <h3 className="text-capitalize">{courseDetails.title}</h3>
           <p>
               {courseDetails.description}
           </p>
          </div>
          <div class="col-lg-4">

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Trainer</h5>
              <p><a>{courseDetails.tutor_name}</a></p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Course Fee</h5>
                 <p>{courseDetails.cost == 'Free' ? 'Free' : <>₦{courseDetails.cost}</>}</p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Number of Students</h5>
                 <p>{attendance == ''? 0 : attendance}</p>
            </div>

         <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Date Created</h5>
              <p>{courseDetails.date_created}</p>
        </div>
        
         <div class="course-info d-flex justify-content-between align-items-center">
         <Link  style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={startCourse}><h4><i class="fad fa-play"></i> Start Course</h4></Link>
         <Link style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={saveCourse}><h4><i class="fad fa-save"></i> Save Course </h4></Link>
            </div>

          </div>
        </div>
        
      </div>
       </section>
       
       <div class="container">
         <div>
        <p class="fst-italic">
          Course Reviews:
        </p>
        <ul>
            
      {Getreview.map((item, index) => {
        return (
          <li style={{ listStyle: 'none' }} key={index}> <i class="fas fa-check"></i><small> {item.last_name}</small>: {item.content}</li>
      )
      })}
    </ul>
       </div> 

  <div class="form-group text-left">
    <label for="exampleFormControlTextarea1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Course Review</label>
  <textarea class="form-control" rows="3" name="desc" placeholder="Drop a review" onChange={handleReview}/>
  </div>
  <div className="text-left mb-4">
  <button className="btn  g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
      }} onClick={submitReview}>Send</button>
      </div>
           </div>
   </main>
   
   <footer id="footer">
      <div className="footer-top">
      <div className="container">
      <div className="row">
      <div className="col-lg-3 col-md-6 footer-contact">
      <h3>Fromhome</h3>
       <p>
              Lagos,
              Nigeria <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@fromhome.com<br/>
            </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/"  style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link></li>
              <li><Link to="/" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link></li>
              <li><Link2 to="courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link2></li>
              <li><Link to="/signup"><i class="bx bx-chevron-right"></i> <a href="#">Signup</a></Link></li>
           
            </ul>
              </div>
              

              <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Courses</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">HTML</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Bootstrap</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Wordpress</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Git</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">React</a></li>
            </ul>
              </div>
              
              <div class="container d-md-flex py-4">
              <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span><a>Fromhome</a></span></strong>. All Rights Reserved
        </div>
      
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      </div>

      <Link2 to="main"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link2>
      </div>
      </div>
      </div>
      </footer>
  </div>
 )
}

export default Coursedetails
