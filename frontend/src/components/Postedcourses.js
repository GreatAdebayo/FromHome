import React from 'react'

const Postedcourses = () => {
 return (
  <div>
 <section id="cta" class="cta" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '80px 0',
        zIndex: 997
  
      }}>
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Tutors Portal.</h3>
      <p> See your posed courses, and track all information about them. </p>
      <a class="cta-btn">Create a Course<i class="fal fa-arrow-right"></i></a>
      
        </div>

      </div>
   </section>
   

   {/* COURSES SECTION */}
   <section id="courses" class="courses">
   <div class="container" data-aos="fade-up">
   <div class="section-title mt-3">
   <h2>Posted Courses</h2>
   </div>
   <div class="row" data-aos="zoom-in" data-aos-delay="100">
  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
  <div class="course-item">
  <div class="course-content mt-4">
<h3><a style={{ cursor: 'pointer' }}>Website Design</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
  <span>Antonio</span>
</div>
<div class="trainer-rank d-flex align-items-center">
  <i class="bx bx-user"></i>&nbsp;50
  &nbsp;&nbsp;
  <i class="bx bx-heart"></i>&nbsp;65
</div>
</div>
</div>
</div>
</div> 


</div>

</div>
</section>
   {/* COURSES SECTION */}  
  </div>
 )
}

export default Postedcourses
