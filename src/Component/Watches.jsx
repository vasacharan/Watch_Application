import React from 'react';
import watch from '../Assets/product-4.jpg';


export default function Watches() {
  return (
    <div>
        
        <div className='container position-relative mt-5'>
            <div className='card position-absolute top-0 start-0 watch-car'>
                <div className='card-body text-center'>
                    <h5>Heritage 1921</h5>
                    <p>Minimalistic & Modern</p>
                    <p className='fw-bolder text-primary'><a>EXPLORE<i class="fa-solid fa-chevron-right"></i></a></p>
                    <img src={watch} alt='watch-pic' className='w-100'/>
                </div>
            </div>
            <div className='card top-0 start-50 translate-middle-x watch-car'>
                <div className='card-body text-center'>
                    <h5>Heritage 1921</h5>
                    <p>Minimalistic & Modern</p>
                    <p className='fw-bolder text-primary'><a>EXPLORE<i class="fa-solid fa-chevron-right"></i></a></p>
                    <img src={watch} alt='watch-pic' className='w-100'/>
                </div>
            </div>
            <div className='card position-absolute top-0 end-0 watch-car'>
                <div className='card-body text-center'>
                    <h5>Heritage 1921</h5>
                    <p>Minimalistic & Modern</p>
                    <p className='fw-bolder text-primary'><a>EXPLORE<i class="fa-solid fa-chevron-right"></i></a></p>
                    <img src={watch} alt='watch-pic' className='w-100'/>
                </div>
            </div>
        </div>
       
      

    </div>


  )
}
