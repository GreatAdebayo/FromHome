import React from 'react'

const Fundwallet = () => {
 return (
  <div>
   <form data-aos="fade-up">   
  <div class="form-group">
 <p style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }} className="font-weight-bold"><i class="fas fa-info-circle"></i> Fund your wallet <br /> <span>
 <small style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }}>You can always buy any course with your wallet's funds</small><br/>
 </span></p>
    <label for="exampleFormControlInput1" className="tx" style={{fontFamily: '"Poppins" sans-serif', color:'#5fcf80'}}>Amount</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Type Amount"/>
    </div>

    <div class="form-group">
    <label for="exampleFormControlInput1" className="tx" style={{fontFamily: '"Poppins" sans-serif', color:'#5fcf80'}}>Card Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Type Card Number"/>
    </div>
    
  <button className="btn  g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
   }}>Fund</button>

   </form>
  </div>
 )
}

export default Fundwallet
