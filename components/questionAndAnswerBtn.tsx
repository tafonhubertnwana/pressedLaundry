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
                    <p className='text-xl'>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold">How long you take to return the garments</div>
                  <div className="collapse-content">
                    <p className='text-xl'>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold">How can I pay for the services</div>
                  <div className="collapse-content">
                    <p className='text-xl'>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-bold">Does Dry cleaning process removes all the</div>
                  <div className="collapse-content">
                    <p className='text-xl'>hello</p>
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