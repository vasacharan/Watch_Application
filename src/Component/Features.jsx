import React, { createContext, useState } from 'react';
import w1 from '../Assets/product-1.jpg';

export const userData = createContext();

export default function Features() {
 

  const watchPrice = 399;
  const [cart, setCart] = useState([]);

  const watchs = [
    {
      watch_id : 1,
      watch_name : 'Metro 38',
      watch_price : 399,
      watch_img : 'image'
    }
   
];

const handleAddToCart=(item)=>{
  const addtocart = [...cart]
  addtocart.push(item);
  
  setCart(addtocart)
}
console.log(cart);
  return (
    <div>
        <div class="container text-center">
          <div className='row'>
            <div class="col p-5">
              <div className='card border-0'>
              <i class="fa-solid fa-truck-fast fs-1 text-primary"></i>
              <h5 className='fw-bolder'>Two-hour Delivery</h5>
              <p className='fw-normal fs-6'>Available in most metros on selected in-stock products</p>
              <p className='text-capitaize fw-bolder text-primary'><a>LEARN MORE</a></p>
            </div>
            </div>

            
            <div class="col p-5">
            <div className='card border-0'>
              <i class="fa-regular fa-message fs-1 text-primary"></i>
              <h5 className='fw-bolder'>Get help Buying</h5>
              <p className='fw-normal fs-6'>Have a Question? Call a Specialist or chat online for help </p>
              <p className='text-capitaize fw-bolder text-primary'><a>CONTACT US</a></p>
            </div>
            </div>

           
            <div class="col p-5">
             <div className='card border-0'>
              <i class="fa-solid fa-percent fs-1 text-primary"></i>
              <h5 className='fw-bolder'>Find the card for you</h5>
              <p className='fw-normal fs-6'>Get 3% Daily Cash with special financing offers from us</p>
              <p className='text-capitaize fw-bolder text-primary'><a>LEARN MORE</a></p>
            </div>
          </div>
          </div>
        </div>

        <div className='container text-center'>
          <div className='row gap-3'>
            <div className='col-lg bg-light'>
              <figure className='position-relative'><img src={w1} alt='wth_pricing' style={{width:'80%'}} height={'auto'} />
                <figcaption className='position-absolute watch-box p-3'><h5 className='fw-bold text-white'>Metro 38 date</h5><p className='text-white fw-lighter'>Reference 1102</p>
                {
                  watchs.map((item,index)=> { return(
                
                <button className='bg-danger fw-bold text-white' onClick={()=>{handleAddToCart(item)}}><i class="fa-solid fa-cart-shopping"></i> $ {item.watch_price}</button>
                )} )}
                </figcaption>
              </figure>
            </div>

            <div className='col-lg bg-light'>
              <figure className='position-relative'><img src={w1} alt='wth_pricing' style={{width:'80%'}} height={'auto'} />
                <figcaption className='position-absolute watch-box p-3'><h5 className='fw-bold text-white'>Metro 38 date</h5><p className='fs-6 text-white fw-lighter'>Reference 1102</p>
                <button className='bg-danger fw-bold text-white'><i class="fa-solid fa-cart-shopping"></i> $ {watchPrice}</button>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

       
    </div>
  )
}

