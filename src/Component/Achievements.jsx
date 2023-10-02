import React from 'react';

export function Achievements() {
  return (
    <div>
         
        <div class="container mt-5">
          <div class="row gap-2">

            <div class="col-lg">
                <div className='card achieve-box'>
                  <div className='achv-icons mt-5 position-relative top-50 start-50 translate-middle'><i class="fa-solid fa-person fs-2 text-white position-absolute top-50 start-50 translate-middle"></i></div>
                    <h4 className='text-center'>300</h4>
                    <h6 className='text-center pb-2'>Happy Clients</h6>
                  </div>
                </div>

                <div class="col-lg">
                  <div className='card achieve-box'>
                  <div className='achv-icons mt-5 position-relative top-50 start-50 translate-middle'><i class="fa-solid fa-check fs-2 text-white position-absolute top-50 start-50 translate-middle"></i></div>
                    <h4 className='text-center'>30</h4>
                    <h6 className='text-center pb-2'>Complete Projects</h6>
                  </div>
                </div>

                <div class="col-lg">
                  <div className='card achieve-box'>
                  <div className='achv-icons mt-5 position-relative top-50 start-50 translate-middle'><i class="fa-solid fa-hourglass-start fs-2 text-white position-absolute top-50 start-50 translate-middle"></i></div>
                    <h4 className='text-center'>12</h4>
                    <h6 className='text-center pb-2'>Pending Projects</h6>
                  </div>
                </div>

                <div class="col-lg">
                  <div className='card achieve-box'>
                  <div className='achv-icons mt-5 position-relative top-50 start-50 translate-middle'><i class="fa-solid fa-mug-hot fs-2 text-white position-absolute top-50 start-50 translate-middle"></i></div>
                    <h4 className='text-center'>560</h4>
                    <h6 className='text-center pb-2'>Cup of Tea</h6>
                  </div>
                </div>
                      
              </div>
        </div>
  </div>
  )
}
export default Achievements;

