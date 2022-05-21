import React from 'react'
import pic from "../MediCare+.jpg";
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="">
       <img src={pic} height="30" width="30" className="img" alt="mylogo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
  
         <li className="nav-item">
           <Link className="nav-link" to="/services">Services</Link>
         </li>

        <li className="nav-item">
          <Link className="nav-link"  to="/news">News</Link>
        </li>

       <li className="nav-item">
        <Link><button className="btn btn-primary me-2" type="button">Contact</button></Link>
       </li>
        </ul>
        
      </div>
    </div>
  </nav>
    </>
  )
}
export default Navbar
