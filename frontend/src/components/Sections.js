import React, {useEffect, useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'


const Toast2 = Swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 1500,
   didOpen: (toast) => {
   toast.addEventListener('mouseenter', Swal.stopTimer)
   toast.addEventListener('mouseleave', Swal.resumeTimer)
   }
})
 

const Sections = () => {
   let history = useHistory();
   const sectionRef = useRef('')
   const contentRef = useRef('')
   const sectionOption = useRef('')
   // DISPLAY COURSE DETAILS
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
      if (lsSection === '') {
         setShowSection(false)
      } else {
         setShowSection(true)
      }
  
      } else {
   setLsSection([])   
   } 
  
   }, [])

const [lsDetails, setLsDetails] = useState({})
const [lsSection, setLsSection] = useState([])
const [showDetails, setShowDetails] = useState(false)
const [showSection, setShowSection] = useState(false)
   
   
   
const handleSection = () => {
const LsSection = lsDetails.section 
const sectionName = sectionRef.current.value;  
const section = {name:`${sectionName}.`, content:'', file:[]}
   if (sectionName) {
      if (LsSection) {
      LsSection.push(section);
      localStorage.setItem('details', JSON.stringify(lsDetails))
      const sectionArray = localStorage.getItem('details');
      setLsSection(JSON.parse(sectionArray).section)
      Toast2.fire({
         icon: 'success',
         title: 'Section name addded'
       })  
      } else {
         Toast2.fire({
            icon: 'error',
            title: 'No course details found'
          })
      }
     
   } else {
      Toast2.fire({
         icon: 'info',
         title: 'Add Section name'
       }) 
}
 
}
   const handleContent = () => {
   const cont = contentRef.current.value;
   const selectOpt = sectionOption.current.value;
   const LsSection = lsDetails.section
   if (cont && selectOpt) {
      if (LsSection) {
   let check = LsSection.find(data => selectOpt  == data.name )
   if (check) {
   check.content = cont
   localStorage.setItem('details', JSON.stringify(lsDetails))
   const sectionArray = localStorage.getItem('details');
   Toast2.fire({
         icon: 'success',
         title: 'Content addded'
   })
   setLsSection(JSON.parse(sectionArray).section)
      }
      } else {
      Toast2.fire({
      icon: 'error',
      title: 'No course details found'
          })  
             }
      } else {
         Toast2.fire({
            icon: 'info',
            title: 'Add content'
      })
        }
   
   }
   const saveSection = (e) => {
      e.preventDefault();
      const sectionArray = JSON.parse(localStorage.getItem('details'));
      if (sectionArray) {
      const section = sectionArray.section
         if (section != '') {
            history.push('/dashboard/createcourse/files')
         } else {
            Toast2.fire({
               icon: 'info',
               title: 'Add Section'
         })
         }
      } else {
         Toast2.fire({
            icon: 'error',
            title: 'No course details found'
          })
      }
     
    
   }
   const deleteSection = (index) => {
   // setLsSection(lsSection.splice(index, 1)) 
      // let localSec = JSON.parse(localStorage.getItem('details'));
      // let sec = localSec.section
      // console.log
   // let sect = localSec.section.find(data => data.index === index)
   // if (sect) {
   //      alert('seen')
   //   } 
      // setLsSection(lsSection => {
      // const sect = [...lsSection];
      // sect.splice(index, 1);
      //    return sect;
      // })
      // localStorage.setItem('details', JSON.stringify(lsDetails))
   //    let Items = JSON.parse(localStorage.getItem('details'));
   //    // console.log(Items.section)
   //    Items.section.forEach((item, index) => {
   //    if(item.index == index) {
   //       Items.section.splice(index, 1);
   //     }
   //    });
   // localStorage.setItem('details', JSON.stringify(lsDetails))
      
   }
   


 return (
  <div className="border p-4 rounded">
   <form data-aos="fade-up">
   <div class="form-group">
   <div className="border px-3 pt-3 mb-4 rounded text-center">
   <p style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }} className="font-weight-bold"><i class="fas fa-puzzle-piece"></i> Course Sections <br /> <span>
   <small style={{fontFamily: '"Poppins" sans-serif', color: '#777777' }}>You can always edit your details even after saved</small><br/>
   </span></p>
   </div>
   

  {showDetails ? <div class="aler py-2 pl-2 mb-3 tx" style={{ color: '#777777' }}>
  <p className="text-uppercase"><strong>Course Details</strong></p>
  <strong>Course Title:</strong> <span className="text-uppercase">{lsDetails.title}</span> <br/>
  <strong>Category:</strong> <span className="text-uppercase">{lsDetails.category}</span> <br />
  <strong>Cost:</strong> <span className="text-uppercase">{lsDetails.cost == '' ? 'Free' : <>₦{lsDetails.cost}</>}</span>          
  </div> : null}

             
 <label for="exampleFormControlSelect1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Section Names</label>
 <div class="input-group mb-3">
 <input type="text" class="form-control" placeholder="Type in all section names"  aria-describedby="basic-addon2" ref={sectionRef}/>
 <div class="input-group-append">
 <span class="input-group-text btn g font-weight-bold border-0" id="basic-addon2" onClick={handleSection}>Add</span>
 </div>
 </div>
</div>

          {/* SECTION LOOP */}
   <div className="row">
   {showSection ? <p className="tx text-uppercase" style={{color:'#777777'}}><strong>Course Sections:</strong></p>
     :null}
      {lsSection.map((item, index) => {
      return (
      <div className="col-md-3">
      <div class="aler py-2 px-2 mb-3 tx justify-content-center"  style={{color:'#777777'}}>
      <strong class="text-uppercase" key={index}>{index+1}. {item.name}</strong>
      <button type="button" class="btn-close float-right" aria-label="Close" onClick={()=>deleteSection(index)}></button>
      </div> 
      </div>
         ); })}        
      </div>

            {/* SECTION LOOP ENDS */}

          

  <div class="form-group mt-4">
    <label for="exampleFormControlTextarea1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Content</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  ref={contentRef}/>
    </div>
    <div class="form-group">
   <small className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Choose Section for this Content</small>
   <div class="input-group mb-3">
   <select class="form-control form-control" ref={sectionOption} type="text">
   {lsSection.map((item, index) => {
      return (
    <option key={index}>{item.name}</option>
               );
             
            })} 
   </select>
   <div class="input-group-append">
   <span class="input-group-text btn g font-weight-bold border-0" id="basic-addon2" onClick={handleContent}>Add</span>
   </div>
   </div>
   </div>

   <div className="row">
    {lsSection.map((item, index) => {
      return (
      <div className="col-md-3">
      <div class="aler py-1 px-2 mb-3 tx justify-content-center" style={{ color: '#777777' }}>
      <>
      <strong class="text-uppercase mr-3" key={index}>{index+1}. {item.name}</strong>
      <p><strong>Content:</strong> {item.content.length > 15 ? `${item.content.substring(0, 15)}...` :item.content == '' ? 'No Content': <>{item.content}</>}</p>
      </>
       </div> 
      </div>
         ); })}        
      </div>
    <button className="btn  g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily: '"Ubuntu", sans-serif'
   }} onClick={saveSection}>Add Files</button>
 
   </form>
    </div>
 )
}

export default Sections
