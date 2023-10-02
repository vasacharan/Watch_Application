import React from 'react';
import bgimg1 from '../Assets/banner-1.jpg';
import bgimg2 from '../Assets/banner-2.jpg';
import bgimg3 from '../Assets/banner-3.jpg';

export default function Background() {


  return (
    <div>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active position-relative">
              <img src={bgimg1} class=" w-100" alt="background1" />
                <div class="carousel-caption d-sm-block position-absolute">
              
                <div className='fig-box text-start'>
                <h4 className='text-dark fw-normal '>Effortlessly cool, for the traditionalists of today</h4>
                <p className='text-primary fw-bold'><a>EXPLORE COLLECTION</a></p>
                </div>
              </div>
            </div>
            
              <div class="carousel-item">
                <img src={bgimg2} class="d-block w-100" alt="background2" />
              </div>
              <div class="carousel-item">
                <img src={bgimg3} class="d-block w-100" alt="background3" />
              </div>
          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
        
    </div>
  )
}

