import React  from "react";
import ract from "../src/Rectangle.png";
import pics from "../src/Oval.png";
import background from "../src/Mask.png";
import './Card.css';
 const Card=()=>{
    return(
        <>
          <div className='ovel_image'>
           <img src={pics} height="190" width="190"/>
           </div>


           <div className="background-img">
               <img src={background} height="953" width="1491"></img>
           </div>


         <div className="card-img">
         <img src={ract}  height="300" width="300"/>
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
        </>
    )
 }
 export default Card;