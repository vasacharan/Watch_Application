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


// <div className='vrproduct-bgcol'>
//           <div class="container-fluid mt-5">
//               <div className='row'>
//                   <div className='col vr-thumbnail'>
//                       <img src={vr} alt='vrproduct' />
//                   </div>
//                   <div className='col vr-content text-left vr-text'>
//                     <h5 className='fw-bold'>ALL-IN-ONE VR </h5>
//                     <h1 className='fw-bold para-text'>Always ready when<br/> you are</h1>
//                     <p className='fw-normal'>Oculus Go is our all-in-one VR headset thats's portable and easy tio use. Experience entertainment on the go with no pc, no wires or hasseles.</p>
//                   </div>
//               </div>
//           </div>
//         </div>






// <div className='container mt-5 position-relative'>
//         <div className='row position-relative'>
//           <div className='col-lg-6 col-md-12 position-relative'>
//             <div className='card border-0'>
//             <img src={vr} alt='vrproduct' className='img-fluid' style={{width:'100%'}}/>
//             </div>
//           </div>
//         </div>

        
//           <div className='col-lg-6 col-md-12 position-absolute float-end z-1'>
            
//             <h5 className='fw-bold'>ALL-IN-ONE VR </h5>
//             <h1 className='fw-bold para-text'>Always ready when<br/> you are</h1>
//             <p className='fw-normal'>Oculus Go is our all-in-one VR headset thats's portable and easy tio use. Experience entertainment on the go with no pc, no wires or hasseles.</p>
          
//           </div>
      
//       </div>   