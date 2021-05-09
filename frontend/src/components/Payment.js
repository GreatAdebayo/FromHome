import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Fundwallet from './Fundwallet';
import Withdraw from './Withdraw';
import Bankdetails from './Bankdetails';

const Payment = () => {
    const [isActive1, setActive1] = useState(true)
    const [isActive2, setActive2] = useState(false)
    const [isActive3, setActive3] = useState(false)
    
    const handleClick1 = () => {
      setActive1(true)
      setActive2(false)
      setActive3(false)
    }
    const handleClick2 = () => {
      setActive1(false)
      setActive2(true)
      setActive3(false)
    }
    const handleClick3 = () => {
    setActive2(false)
    setActive3(true)
    setActive1(false)
    }

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
      <h3>Payment Details</h3>
      <p> Track all funds to your wallet and monitor all your earnings. </p>
       <a class="cta-btn"  style={{cursor:'pointer'}}>Wallet: ₦1000 <br/>Earnings: ₦1000</a>      
        </div>

      </div>
     </section>
     
     <section id="about" className="about">
      <div className="container" data-aos="fade-up">

     <div class="row">
      <div className="col" data-aos="fade-left" data-aos-delay="100">
      <div class="section-title mt-3">
       <h2>Payment</h2>
    </div>
  <ul class="nav nav-pills nav-fill">
   <li class="nav-item">
  <Link to="/dashboard/payment/fundwallet" class={"nav-link txt " + (isActive1 ? 'active': null)}  aria-current="page"  style={{color:'#5fcf80', fontWeight:'500'}} onClick={handleClick1}>Fund Wallet</Link>
   </li>
   <li class="nav-item">
  
   <Link to="/dashboard/payment/withdraw" class={"nav-link txt " + (isActive2 ? 'active': null)} style={{color:'#5fcf80', fontWeight:'500'}} onClick={handleClick2}>Withdraw</Link>
  
    </li>
   <li class="nav-item">
    <Link class={"nav-link txt " + (isActive3 ? 'active': null)} to="/dashboard/payment/bankdetails"  style={{color:'#5fcf80', fontWeight:'500'}} onClick={handleClick3}>Bank Details</Link>
    </li>
     </ul>
      
       <div className="mt-4 justify-content-center">
      <Switch>
      <Route path="/dashboard/payment/fundwallet">
      <Fundwallet/>
      </Route>
                
      <Route path="/dashboard/payment/withdraw">
      <Withdraw/>
      </Route>
                 
      <Route path="/dashboard/payment/bankdetails">
      <Bankdetails/>
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

export default Payment
