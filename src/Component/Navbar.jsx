import React from 'react';
import brand from '../Assets/charan_logo.png';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const loginnavigate = useNavigate();

  const number = 36;

  return (
  <div>
   
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container">
            <a className="navbar-brand" href="#"><img classNameNameName='img-thumbnail' src={brand} alt='brand_name' width={150} height={50}/></a>
            <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-3">
            <button className="toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
              </button>
      
            <div className="dropdown ms-3 all-bdr">
              <a className="btn btn-light dropdown-toggle all-bdr" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                All   
              </a>

              <ul className="dropdown-menu ps-2">
               <li><Link to='/' className="dropdown-item">Home</Link></li>
               <li><a className="dropdown-item" href="#">All Products</a></li>
                <li><a className="dropdown-item" href="#">Watches</a></li>
                <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                <li><Link to='/Signin' className="dropdown-item">Logout</Link></li>
              </ul>

            </div>
              <form className="d-flex w-75" role="search">
                <input type="text" className="form-control all-btn1" placeholder="Search...." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass" /></button>
              </form>

              <button className="btn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="User" type="button"><i className="fa-solid fa-user"></i></button>
              <button className="btn btn position-relative" type="submit"><i className="fa-solid fa-cart-shopping"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{number}<span className="visually-hidden">unread messages</span></span></i></button>
            </div>
                      {/* Names on Nav bar*/}

           
        </div>
      </nav>
     
  </div>

  )
}