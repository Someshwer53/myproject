import React  from "react";
import pics from "../src/images/Oval.png";
import Ract from "../src/images/Rect.png";
import Shape from '../src/images/Shape.png';
import Ractlen from '../src/images/Rectlen.png';
 import Lungs from '../src/images/lungs.png';
import RectNeuro from '../src/images/Rectangleneuro.png';
import Shape2 from '../src/images/Shape2.png';
import plus from '../src/images/plus.png';
import RectPre from '../src/images/Rectangle_pre.png';
import Shape4 from '../src/images/Shape4.png';
import New from '../src/images/dil.png';
import path from '../src/images/Path.png';
import path1 from '../src/images/Path1.png';
 import circle from '../src/images/circle.png';
 import './Card.css';

 const Card=()=>{
    return(
        <>
 
          <div className="main_page">  

          <div className='oval_image'>
           <img src={pics} height="170" width="170" alt="oval"/>
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
          <button className="btn btn-primary button">Make an Appointment</button>
          <button className="btn btn-light button1">Departments</button>
          </div>
         </div>
        <div>
        <img src={Ract} alt="ract" className="card_img"/>
        </div>
         </div>
 
         </div>
       {/*  Main Page end  */}

      {/*  Services Page--    */}
         
          <div className="main_div">
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

          <div className="img_container">
          <img src={Ractlen} alt="rectangle" name="poly" height="300" width="300"/>
           <text>Pulmonary</text>
           <p>Learn More </p>

           <div className="lungs">
             <img src={Lungs} alt="lungs" height="100" width="100"/>
             </div> 


            <span>
              <img src={RectNeuro} alt="neuro" height="300" width="300"/> 
              <div className="shape_img">
                <img src={Shape2} alt="shape" height="100" width="100"/>
              </div>
              <div>
              <img  src={plus} alt="plus" className="plus_img" height="30" width="30"/>
              <h4 className="text-center">Neurological</h4>
              </div>
            </span>


             <span className="h4-img">
              <img src={RectPre} alt="pre" height="300" width="300"/>
              <div className="main">
                <img src={Shape4} alt="shape"/>
              </div>
              <img src={New} alt="New" className="image_container"/>
              <img src={path} alt="path"  id="path"/>
              <img src={path1} alt="path1" id="path1"/>
              <img src={circle} alt="circle" id="circle"/>
               <h4 className="text-center">Prediatrics</h4>
             </span>

        </div>
        </div>
          {/* Service Page end}


{/* Clinic With Innovation  */}
 
          <div className="h6_div">
          <div className="clinic_ino">
              <h3>Clinic With Innovative</h3>
               <p>We provide tha most full medical service, so every person
                 could heave tha oppurtunity to receive qualitative medical help.
               </p>
            </div>
            
          </div>
        {/*  clinic end */}
        
        </>
    );
 }
 export default Card;