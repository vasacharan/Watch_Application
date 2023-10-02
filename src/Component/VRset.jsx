import React,{useState} from 'react';
import vrsetimg from '../Assets/product-3.jpg';
// import VRmultiselect from './VRmultiselect';
import t1 from '../Assets/thunb-1.jpg';
import t2 from '../Assets/thunb-2.jpg';
import t3 from '../Assets/thunb-3.jpg';
import t4 from '../Assets/thunb-4.jpg';
import t5 from '../Assets/thunb-5.jpg';
import t7 from '../Assets/product-items-1.jpg';
import t8 from '../Assets/product-items-2.jpg';
import t9 from '../Assets/product-items-3.jpg';



export default function VRset() {

const [selectImg, setSelectImg] = useState(vrsetimg);
const [count, setCount] = useState(1);
// const [disabled, setDisabled] = useState(false);

const handleImg = (e) =>{
  var expandImg = document.getElementById('expandedImg');
  expandImg.src = setSelectImg(e.target.src)
}
const colours = {
  img1_col1 : 'Gray',
  img2_col2 : 'Light Pink',
  img3_col3 : 'Brown'
}

let disabled = false;
const handleCount = (e)=>{
console.log(e);
  if(count.length == 0){
    disabled = true;
   
  }
}
console.log(count);
// const sel_col = document.getElementById('sel-img1');
const img_hovr = document.getElementById('hov-img');

const addEventList =()=>{
  img_hovr.style.outlineColor = 'red';
}

return (
  <div>
           {/*  VR product All-in-one start  */}
      <div className='vrset-box pb-4'>
          <section className='text-center p-3'>
                <h5 className='pt-5 lh-1'>All-in-one</h5>
                <h2>Oculus VR</h2>
          </section>
          <div className='vr-set text-center'>
                <img src={selectImg} alt='vrimg1' id='expandedImg' style={{maxWidth:'75%', maxHeight:'70%'}}/>
          </div>
            <div className='vr-select'>

              <div class="d-flex flex-row justify-content-center">
                  <div class="p-1 col-2"><button className='btn btn' onClick={handleImg}><img className='vrset-hover' src={t1} alt='thumb1' width={50} height={50} /></button></div>
                  <div class="p-1 col-2"><button className='btn btn' onClick={handleImg}><img className='vrset-hover' src={t2} alt='thumb2' width={50} height={50} /></button></div>
                  <div class="p-1 col-2"><button className='btn btn' onClick={handleImg}><img className='vrset-hover' src={t3} alt='thumb3' width={50} height={50} /></button></div>
                  <div class="p-1 col-2"><button className='btn btn' onClick={handleImg}><img className='vrset-hover' src={t4} alt='thumb4' width={50} height={50} /></button></div>
                  <div class="p-1 col-2"><button className='btn btn' onClick={handleImg}><img className='vrset-hover' src={t5} alt='thumb5' width={50} height={50} /></button></div>
              </div>
            </div>

              {/*  Add to cart and Buy now code start --- multiselect ---- color select*/}

            <div className='container text-start'>
              <h5 className='pt-5 lh-1 text-align-left'>All-in-one</h5>
              <h2 className='fw-bold'>Oculus VR</h2>
            </div>

        {/*  1 row ----  1st colomn started */}
              
        <div className='container text-center vr-select-product'>
          <div className='row'>
              <div className='col-lg bg-light'>
                  <p className='fst-normal text-start'>Select Your Oculus:</p>

                      <div class="d-flex flex-row justify-content-left gap-3">
                        <div class="p-2" id='hov-img'><img className='border border-1' src={t7} alt='cart-img' width={93} height={93}/></div>
                        <div class="p-2 "><img className='border border-1' src={t8} alt='cart-img' width={93} height={93}/></div>
                        <div class="p-2 "><img className='border border-1' src={t9} alt='cart-img' width={93} height={93}/></div>
                      </div>
                      <div class="d-flex flex-row justify-content-left gap-3 lh-1">
                        <div class="p-2 "><p className='fst-normal'>Select Colour: {colours.img1_col1} </p></div>
                        <div class="p-2 "><p>Memory (GB):</p></div>
                        <div class="p-2 "><p>Select Quantity:</p></div>
                      </div>

                    {/*  colors and Storage capacity code */}

                      <div class="d-flex flex-row justify-content-left gap-1">
                        <div class="p-2 d-flex flex-row gap-2"><div className='col-box1' id='sel-img1' onClick={addEventList}></div><div className='col-box2'></div><div className='col-box3'></div></div>
                            <div class="p-2">
                              <select class="form-select" aria-label="Default select example">
                                  <option selected value="1" className='active'>8 GB</option>
                                  <option value="2">16 GB</option>
                                  <option value="3">32 GB</option>
                                  <option value="4">64 GB</option>
                                </select>
                            </div>
                            <div class="p-2 d-flex flex-row"><button type='button' value={disabled} onChange={handleCount} className='btn btn border border-1' id='qty_btn' onClick={()=>{setCount(count-1)}} disabled={disabled} >-</button><button className='btn btn border border-1'>{count}</button><button className='btn btn border border-1' onClick={()=>{setCount(count+1)}}>+</button></div>
                      </div>
              
                      {/*  Shopping country code start */}

                      <div className='d-flex flex-row'>
                          <p>Select Hopping Country: <b>+ $ 350 USD</b></p> <br />
                      </div>
                          <div className='w-50'>
                            <select class="form-select" aria-label="Default select example">
                              <option selected value="1" className='active'>----Select Country----</option>
                              
                              <option value="2">INDIA</option>
                              <option value="2">NEPAL</option>
                              <option value="3">SRILANKA</option>
                              <option value="4">BANGLADESH</option>
                              <option value="5">USA</option>
                              <option value="6">AUSTRALIA</option>
                              <option value="7">RUSSIA</option>
                              <option value="5">JAPAN</option>
                              <option value="6">CHINA</option>
                              <option value="7">DUBAI</option>
                            </select>
                          </div>  
                        </div> 
                      
            {/*  1 row ----  2nd colomn started */}


                    <div className='col-lg bg-light text-start'>
                       <p>Price: </p>
                       <h1 className='d-inline'>$ 149 USD </h1><h3 className='d-inline'><strike className='d-inline'> $ 179 USD</strike></h3><br /><br />
                       <button className='float-md-start btn btn-primary me-2'><i class="fa-solid fa-cart-plus"></i>  Add To Cart</button><button className='float-md-start btn btn-danger'><i class="fa-solid fa-cart-plus"></i>  Add To Cart</button>
                    </div>
                </div>
          </div>
        </div>
      
  </div>
  )
}

