import React from 'react';
import vr from '../Assets/content-2.jpg';

export default function VRproduct() {
  return (
    <div>
        <div className='container text-left mt-5'>
        <div className='row vr-text-bgc'>
          <div className='col-lg'>
            <figure className='position-relative'> <img src={vr} alt='vrproduct' style={{width:'100%'}} />
              
            </figure>
          </div>

          <div className='col-lg vr-text'>
            <h5 className='fw-bold pt-5'>ALL-IN-ONE VR </h5>
            <h1 className='fw-bold para-text'>Always ready when<br/> you are</h1>
            <p className='fw-normal pe-4'>Oculus Go is our all-in-one VR headset thats's portable and easy tio use. Experience entertainment on the go with no pc, no wires or hasseles.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
