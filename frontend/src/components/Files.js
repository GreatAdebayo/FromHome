import React, {useEffect, useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'


const Files = () => {
  useEffect(() => {
    const allDetails = localStorage.getItem('details');
    if (allDetails) {
      setLsDetails(JSON.parse(allDetails))
      setShowDetails(true)
    } else {
      setLsDetails({})
    }


      // LOOPING OUT THE SECTIONS
   const sectionArray = localStorage.getItem('details');
   if (sectionArray) {
     setLsSection(JSON.parse(sectionArray).section)
     setShowSection(true)
     if (lsSection != '') {
      setShowSection(true) 
      } else {
      setShowSection(false)  
      }
      } else {
   setLsSection([])   
   } 
  
  })
  const [lsDetails, setLsDetails] = useState({})
  const [lsSection, setLsSection] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [showSection, setShowSection] = useState(false)


  return (
    <div className="border p-4 rounded">
    <form data-aos="fade-up">
    <div class="form-group">
    <div className="border px-3 pt-3 mb-4 rounded text-center">
   <p style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }} className="font-weight-bold"><i class="fas fa-paperclip"></i> Attach Files <br /> <span>
  <small style={{fontFamily: '"Poppins" sans-serif', color: '#777777' }}>You can't make any changes once course is posted</small>
  </span></p>
   </div>
          
  {showDetails ? <div class="aler py-2 pl-2 mb-3 tx" style={{ color: '#777777' }}>
  <p className="text-uppercase"><strong>Course Details</strong></p>
  <strong>Course Title:</strong> <span className="text-uppercase">{lsDetails.title}</span> <br/>
  <strong>Category:</strong> <span className="text-uppercase">{lsDetails.category}</span> <br />
  <strong>Cost:</strong> <span className="text-uppercase">{lsDetails.cost == '' ? 'Free' : <>₦{lsDetails.cost}</>}</span>          
  </div> : null}

  <label className="btn g px-2 shadow mt-4">
   <strong>Add File</strong> <input type="file" hidden/>
    </label>      
   <div class="form-group">
   <small className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Choose Section for this File</small>
   <div class="input-group mb-3">
   <select class="form-control form-control"  type="text">
   {lsSection.map((item, index) => {
      return (
    <option key={index}>{item.name}</option>
      );
      })} 
   </select>
   <div class="input-group-append">
   <span class="input-group-text btn g font-weight-bold border-0" id="basic-addon2" >Add</span>
   </div>
    </div>
    </div>






    <div className="row">
    {showSection ? <p className="tx text-uppercase" style={{color:'#777777'}}><strong>Course Sections:</strong></p>
     :null}
    {lsSection.map((item, index) => {
      return (
      <div className="col-md-3">
      <div class="aler py-1 px-2 mb-3 tx" style={{ color: '#777777' }}>
      <>
      <strong class="text-uppercase mr-3" key={index}>{index+1}. {item.name}</strong>
      <p><strong>Content:</strong> {item.content.length > 15 ? `${item.content.substring(0, 15)}...` : item.content == '' ? 'No Content' : <>{item.content}</>} <br />
      <span><p><strong>Files: {item.file == '' ? 'No File Attached' : null}</strong></p> </span></p>
            
      </>
       </div> 
      </div>
         ); })}        
      </div>



   <button className="btn g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
   }}>Post Course <i class="fal fa-long-arrow-right"></i></button>
          </div>
      </form>
      </div>
 )
}

export default Files;
