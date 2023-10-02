import React from 'react';
import ambasidor from '../Assets/content-4.jpg';

export default function Ambasidor() {
  return (
    <div>
        <div className='position-relative pt-4'>
            <img src={ambasidor} alt='ambasidor' style={{maxWidth:'100%', height:'auto'}}/>
        
       
        <div className='amb-box position-absolute top-50 start-50 translate-middle text-center'>
            <h2>THE PRIME <br/> AMBASSADOR</h2>
            <p className='text-primary pt-3 fw-4'><a>EXPLORE COLLECTIONS</a></p>
        </div>
        </div>
    </div>
  )
}
