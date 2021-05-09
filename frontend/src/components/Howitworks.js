import React from 'react'
import { Link } from 'react-router-dom';

const Howitworks = () => {
 return (
  <div>
     {/* About section starts */}
      <div className="container animate__animated animate__bounceIn">
        <div class="row">
          <div className="col-lg-12 content">
              <p class="fst-italic">
              Creating a course and how it works:
              </p>
              <ul>
           <li><i className="bi bi-check-circle"></i> Click the <strong>Details</strong> button at the top to fill basic course details and save.</li>
           <li><i className="bi bi-check-circle"></i> Proceed to click the <strong>Section</strong> button at the top to fill out the section details and save.</li>
           <li><i className="bi bi-check-circle"></i> Sections are various topics your course contains. Fill all section details</li>
           <li><i className="bi bi-check-circle"></i> Proceed to click the <strong>Files</strong> button at the top to attach files to each sections of your course, <br /> you can leave empty if there are not files to be attached.</li>
           <li><i className="bi bi-check-circle"></i>Lastly, Click on the <strong>Create</strong> course button. Courses created can't be edited, please check thoroughly before clicking</li>
            </ul>
     </div> 
        </div>
    <Link to="/dashboard/createcourse/details" className="btn  g px-3 shadow" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
    }}>Get Started</Link> 
      </div>
      {/* About section Ends */}
  </div>
 )
}

export default Howitworks
