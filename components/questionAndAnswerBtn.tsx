import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img3 from '@/public/assets/img05.jpg'

const QuestionAndAnswer = () => {
  return (
    <>
      <div className="w-full">
        <div className="container m-auto">
          <div className="">
            <div className="grid grid-cols-3 p-8">
              <div className=''>
                <div className=''>
                  <Image src={img3} alt='About-us-img-2' />
                </div>
              </div>
              <div className='col-span-2'>
                <div  className='font-bold text-xl'>Question / Answer</div>
                <div className="collapse collapse-plus  rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-bold">What if my clothes are heavily stained?</div>
                  <div className="collapse-content">
                    <p className='text-xl'> If your clothes are heavily stained, please inform us at the time of pickup. We will assess the stains and use specialized treatments to address them. Note that while we strive to remove all stains, some may be difficult to fully eliminate depending on the fabric and nature of the stain.</p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold">How long you take to return the garments?</div>
                  <div className="collapse-content">
                    <p className='text-xl'>The typical turnaround time for returning garments is 1 to 3 business days. For special or bulk orders, or if additional treatment is required, it may take slightly longer. We will provide an estimated return time at the time of pickup and keep you updated on the status of your order.</p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold">How can I pay for the services?</div>
                  <div className="collapse-content">
                    <p className='text-xl'>You can pay for our services through various methods, including cash, credit/debit cards, and mobile payment apps. For convenience, you can also set up automatic billing if you have a recurring service. Please check with our customer service team for specific payment options available in your area.</p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold">Does Dry cleaning process removes all the stains?</div>
                  <div className="collapse-content">
                    <p className='text-xl'>Dry cleaning is effective at removing many stains, but it may not remove all types. The success of stain removal depends on the type of stain, the fabric, and how long the stain has been set. Our team will use specialized treatments to address stains as effectively as possible, but some stains may be challenging to completely remove.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
            
      </div>
       
    </>
  )
}

export default QuestionAndAnswer