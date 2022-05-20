import React  from "react";
import ract from "../src/Rectangle.png";
import pics from "../src/Oval.png";
import background from "../src/Mask.png";
import Ract from "../src/Rect.png";
import Ractlen from "../src/Rectlen.png";
import RectNeuro from "../src/Rectangleneuro.png";
import './Card.css';
 const Card=()=>{
    return(
        <>
          <div className='oval_image'>
           <img src={pics} height="190" width="190" alt="oval"/>
           </div>


           <div className="background-img">
               <img src={background} height="953" width="1491" alt="background"></img>
           </div>


         <div className="card-img">
         <img src={ract}  height="300" width="300" alt="card"/>
         </div>
          
         <div className="card-text">
         <h3>Welcome to Medicare+ Clinic</h3> 
        <h2>Best Specialists</h2>
        <p>We are on tha leading edge of cancer care.
            Providing tha full continuum of cancer 
            treatments and supportive
            care services in a single convenient
             location.
        </p>  
        <button className="btn btn-primary">Make An Appointment</button>
        <button className="btn btn-light button1">Departments</button>
         </div>


         <div className="service_card">
           <h2>Our Services</h2>  
          <p>We provide tha most full medical services, so every person could
              heave tha oppurtunity to receive quality medical help.</p> 
            <img src={Ract} height="100" width="100" alt="ract"/> 
            <h5 className="text">Dental Care</h5>
         </div>

      

          <div>
          <img src={Ractlen} height="300" width="300" alt="reactlen"/>  
         <h5 className="text_len">Pulmonary</h5>
          </div>
        
 
         <div className="neuro_img">
           <img src={RectNeuro} height="200" width="200" alt="neuro"/>
         </div>
        
        
        </>
    )
 }
 export default Card;