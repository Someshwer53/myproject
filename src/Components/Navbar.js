import React from 'react'
import pic from "../MediCare+.jpg";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg  fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
       <img src={pic} height="30" width="30" className="img"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link "  href="/">About</a>
          </li>
  
         <li className="nav-item">
           <a className='nav-link' href="/">Services</a>
         </li>

        <li className="nav-item">
          <a className="nav-link"  href="/">News</a>
        </li>

       <li className="nav-item">
        <a> <button className="btn btn-primary me-2" type="button">Contact</button></a>
       </li>
        </ul>
        
      </div>
    </div>
  </nav>
    </>
  )
}
export default Navbar
