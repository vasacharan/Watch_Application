import React from 'react';
import priceimg from '../Assets/pricing-5.png';

export default function Cards() {
    const card_plans = [
    {
        plan_amount_w : 10,
        plan_amount_m : 50,
        plan_amount_y : 90
    }
];

  return (
    <div>
        <div className="container overflow-hidden text-center">
        {
            card_plans.map((product)=>{
                return(
                    <div class="row gx-4 body-card mt-4">
                    <div class="col plan-box p-2 mb-4 bg-body-tertiary rounded">
                        <div class=" card shadow p-3">
                            <div className=''><span className='float-start fs-4'>Stater Plan</span> <span className='float-end fs-5 fw-bold'>${product.plan_amount_w} <br/><span className='vr-sub-plans'>/weekly</span></span> <br />
                            
                            </div>
                            <section className='mt-5'><img src={priceimg} alt='plan_img' width={90} height={100}/></section>
                            <div className='check-form text-start mt-4'>
                                <form>
                                    <input type='checkbox' className='fs-4' disabled/> 2 Accounts <br />
                                    <input type='checkbox' disabled/> Up to 5 GB Space <br />
                                    <input type='checkbox' disabled/> 1 Domain <br />
                                    <input type='checkbox' disabled/> 24/7 Support <br />
                                </form>
                            </div>
                            <button className='btn bg-primary w-100 mt-3'>GET STARTED</button>
                        </div>
                    </div>
                    <div class="col plan-box p-2 mb-4 bg-body-tertiary rounded">
                        <div class=" card p-3 shadow">
                            <div className=''><span className='float-start fs-4'>Stater Plan</span> <span className='float-end fs-5 fw-bold'>$ {product.plan_amount_m} <br/><span className='vr-sub-plans'>/monthly</span></span> <br />
                          
                            </div>
                            <section className='mt-5'><img src={priceimg} alt='plan_img' width={90} height={100}/></section>
                            <div className='check-form text-start mt-4'>
                            <form>
                                <input type='checkbox' disabled/> 2 Accounts <br />
                                <input type='checkbox' disabled/> Up to 5 GB Space <br />
                                <input type='checkbox' disabled/> 1 Domain <br />
                                <input type='checkbox' disabled/> 24/7 Support <br />
                            </form>
                        </div>
                        <button className='btn bg-primary w-100 mt-3'>GET STARTED</button>
                        </div>
                    </div>
                    <div class="col plan-box p-2 mb-4 bg-body-tertiary rounded">
                        <div class=" card p-3 shadow">
                            <div className=''><span className='float-start fs-4'>Stater Plan</span> <span className='float-end fs-5 fw-bold'>$ {product.plan_amount_y} <br/><span className='vr-sub-plans'>/yearly</span></span> <br />
                           
                            </div>
                            <section className='mt-5'><img src={priceimg} alt='plan_img' width={90} height={100}/></section>
                            <div className='check-form text-start mt-4'>
                            <form>
                                <input type='checkbox' disabled/> 2 Accounts <br />
                                <input type='checkbox' disabled/> Up to 5 GB Space <br />
                                <input type='checkbox' disabled/> 1 Domain <br />
                                <input type='checkbox' disabled/> 24/7 Support <br />
                            </form>
                        </div>
                        <button className='btn bg-primary w-100 mt-3'>GET STARTED</button>
                        </div>
                    </div>
                    </div>
                )
            })
        }
           
        </div>
    
    </div>
  )
}
