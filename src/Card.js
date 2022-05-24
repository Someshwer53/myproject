import React  from "react";

import pics from "../src/images/Oval.png";
import Ract from "../src/images/Rect.png";
import Ractlen from "../src/images/Rectlen.png";
import RectNeuro from "../src/images/Rectangleneuro.png";
import RactPre from "../src/images/Rectangle_pre.png";
import Rectangle_doc from "../src/images/Rectangle_doc.png";
import Rectangle_care from "../src/images/Rectangle_care.png";
import Rectangle_service from '../src/images/Rectangle_service.png';

import Shape from '../src/images/Shape.png';

import './Card.css';

 const Card=()=>{
    return(
        <>

        
          <div className='oval_image'>
           <img src={pics} height="190" width="190" alt="oval"/>
           </div>


       
         {/* Main Image pages   */}
         
            
         <div className="card-text">
         <div>
         <h3>Welcome to Medicare+ Clinic</h3> 
        <h2>Best Specialists</h2>
        <p>We are on tha leading edge of cancer care.
            Providing tha full continuum of cancer 
            treatments and supportive
            care services in a single convenient
             location.
        </p>  
        <div>
          <button className="btn btn-primary">Make an Appointment</button>
          <button className="btn btn-light button1">Departments</button>
          </div>
         </div>
        <div>
        <img src={Ract} alt="ract" className="card_img"/>
        </div>
         </div>

       {/*  Main Page end  */}

      {/*  Services Page--    */}
         
         <div className="service_card">
          
         
           <h2>Our Services</h2>  
          <p>We provide tha most full medical services, so every person could
              heave tha oppurtunity to receive quality medical help.</p> 
            <img src={Ract} height="100" width="100" alt="ract"/> 
             <h5 className="text">Dental Care</h5>
         </div>
         
         <div>
           <img src={Shape} alt="shape" height="70" width="70" className="shape"/>
           </div>

          <div>
          <img src={Ractlen} height="300" width="300" alt="reactlen" className="rect-img"/>  
         <h5 className="text_len">Pulmonary</h5>
          </div>
        
 
         <div className="neuro_img">
           <img src={RectNeuro} height="300" width="300" alt="neuro"/>
           <h5>Neurological</h5>
         </div>
        

        <div className="pre_img">
        <img src={RactPre} height="300" width="300"  alt="Pre"/>
        <h5 className="text-center">Prediatrics</h5>
        </div>

         {/* Service Page end}

         {/* Clinic With Innovation  */}

            <div className="cli_container">
           <h3>Clinic With Innovation</h3>
           <p>We provide tha most full medical services, so every person could 
             heave tha oppurtunity to receive qualitative medical helps.
           </p>

           <img src={Rectangle_doc}  alt="doc" className="doc"/> 
          </div> 

         <img src={Rectangle_care} alt="care" className="care"/>

         <img src={Rectangle_service} alt="service" className="service"/>

        {/*  clinic end */}
        
        </>
    );
 }
 export default Card;