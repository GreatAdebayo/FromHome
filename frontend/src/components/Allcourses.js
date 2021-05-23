import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Skeleton from 'react-loading-skeleton';
import { useParams } from "react-router";
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';
import ReactStars from "react-rating-stars-component";


const AllCourses = () => {
  let {course} = useParams();
  const [skeleton, Setskeleton] = useState(true);
  const [searchCourse, setSearchCourse] = useState([])

  useEffect(() => {
    setTimeout(() => Setskeleton(false), 1000);
    axios.post(`${Baseurl}availablecourses.php`, JSON.stringify(course)
    ).then(res => {
      if (res.status == 200) {
        if (res.data == null){
        setSearchCourse([])
        } else {
        let SearchResponse = res.data.SearchedCourses;
        setSearchCourse(SearchResponse);      
        }
      }
      
    
     })
  }, [])


 


const [isOpen, setIsOpen] = useState(false)
const fileUrl = `${Baseurl}profilepics/`; 

const toggle = () => {
   setIsOpen(!isOpen);
  };
 

return (
<div>
<Navbar  toggle={toggle}/>
<Sidebar isOpen={isOpen} toggle={toggle} />
    
   <main id="main" data-aos="fade-in" className="mt-5">
   <section id="courses" class="courses">
   <div class="container" data-aos="fade-up">
   <div class="row" data-aos="zoom-in" data-aos-delay="100">
   <div class="section-title mt-3">
   {/* <h2>{course} courses</h2> */}
  <p>{course}</p>
   </div>
   <p><Link to="/courses" style={{textDecoration: 'none', color:'#5fcf80'}}><i class="fas fa-long-arrow-alt-left"></i> Back to courses</Link></p>
    
  <div class="row" data-aos="zoom-in" data-aos-delay="100">
   {/* STARTS      */}

  {searchCourse == '' ? <h5 className="text-capitalize">no available courses</h5> : null} 
  {searchCourse.map((item, index) => {
      return (             
  <div class="col-lg-4 col-md-6  align-items-stretch mb-3" key={index}>
   {skeleton ? <Skeleton  count={6} duration={2}/> :   <div class="course-item">
    <div class="course-content">
      <div class="d-flex justify-content-between align-items-center mb-3">
      <Link to={`/coursedetails/${item.course_code}`} className="mr-5" style={{ cursor: 'pointer', textDecoration:'none' }}><h4>Course Details</h4></Link>
      <p class="price">{item.cost == 'Free' ? 'Free' : <>₦{item.cost}</>}</p>
      </div>

      <h3 className="text-capitalize" style={{ cursor: 'pointer', textDecoration:'none' }}><a>{item.title}</a></h3>
      <p className="text-capitalize">{item.description}</p>
      <div class="trainer d-flex justify-content-between align-items-center">
      <div class="trainer-profile d-flex align-items-center">
      {item.tutor_pic ? <img src={fileUrl+item.tutor_pic} class="img-fluid" alt=""/>
                    : <p className="text-light rounded-circle text-center p-auto" style={{ width: '48px', height: '48px', fontSize: '32px', backgroundColor: '#5fcf80', cursor: 'pointer' }}>{item.tutor_name[0]}</p>}
       <span>{item.tutor_name}</span> 
        </div>
        <div class="trainer-rank d-flex align-items-center">
          {/* <i class="bx bx-user"></i>&nbsp;{attendance == ''? 0 : attendance}
          &nbsp;&nbsp;
          <i class='bx bxs-star'></i>&nbsp;65 */}
    <ReactStars
    count={4}
    // onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    style={{textDecoration:'none', outline:'none'}}
  />
        </div>
      </div>
    </div>
  </div>}       
   

</div>   
  );
  })}

           

{/* ENDS */}
         

 </div>
            


</div>

</div>
</section>
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
              <li><i class="bx bx-chevron-right"></i> <a>HTML</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Bootstrap</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Wordpress</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Git</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>React</a></li>
            </ul>
              </div>
              
              <div class="container d-md-flex py-4">
              <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span><a>Fromhome</a></span></strong>. All Rights Reserved
        </div>
      
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a  class="twitter"><i class="bx bxl-twitter"></i></a>
        <a  class="facebook"><i class="bx bxl-facebook"></i></a>
        <a  class="instagram"><i class="bx bxl-instagram"></i></a>
        <a class="google-plus"><i class="bx bxl-skype"></i></a>
        <a  class="linkedin"><i class="bx bxl-linkedin"></i></a>
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

export default AllCourses;
