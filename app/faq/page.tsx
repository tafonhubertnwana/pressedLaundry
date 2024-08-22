import Image from 'next/image'
import React from 'react'
import banner from '@/public/assets/dst-bg-img.jpg'

const Faq = () => {
  return (
    <div className='w-full '>
      <div className='relative'>
        <Image src={banner} alt='banner' className='lg:w-full'/>
        <div className='absolute top-[20%] left-[15%]'>
          <h5 className='text-white py-4'>Home / FAQ</h5>
          <h1 className='text-white'>FAQ</h1>
        </div>
      </div>
      <div className="container m-auto">
        <div className='flex flex-col items-center '>
          <h5 className=" font-bold py-4  text-[#18F0F0]">[ Frequently Asked Questions ]</h5>
          <div className='text-center md:w-[50%] py-4'>
            <h2>Reliable Answers to Our Most
            Common Questions</h2>
            <p className='text-lg py-4'>We can save you money on soap, water, heating and electricity. So you can enjoy even more of the things you love. Our prices are simple and affordable.</p>
          </div>
        </div>
        <div>
          <div  className='font-bold text-xl'>Your First Order!</div>
          <div className='grid md:grid-cols-2 gap-8 mb-[4%]'>
            <div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">What should I prepare for the first pickup?s</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Can I add extra items to my order when you collect…</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Can I order by phone or email?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse rounded-none collapse-plus bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Where are my clothes cleaned?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
            </div>
            <div>
              <div className="collapse collapse-plus  rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">Why do women’s blouses cost more than men’s shirt?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Are there any fabrics you don't clean?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">What if my clothes are heavily stained?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">How can I pay for the services?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
            </div>
              
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <div  className='font-bold text-xl'>Dry Cleaning</div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">What if my clothes are damaged?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">What all is included in your service?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Do you furnish the cleaning supplies?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>   
            </div>
            <div>
              <div  className='font-bold text-xl'>Wash, Tumble Dry & Fold</div>
              <div className="collapse collapse-plus  rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">Do I need to weigh my Wash, Tumble Dry & Fold bag?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">What temperature do you wash the clothes at?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Do I get to keep the bag?</div>
                <div className="collapse-content">
                  <p className='text-xl'>hello</p>
                </div>
              </div>
            </div>
              
          </div>
        </div> 
        <div className="flex flex-col items-center py-6">
        <div className='text-center md:w-[50%] py-4'>
            <h2>Ask Your Question</h2>
            <p className='text-lg py-4'>We look forward to helping you create and maintain a clean, healthy environment that’s as enjoyable as it is functional.</p>
          </div>
        </div> 
        <div className="md:w-[50%] m-auto">
              <div className="p-4">
                <form>
                  <div className="flex flex-col py-2">
                    <label htmlFor="name" className="uppercase text-sm py-2 dark:text-white">Your Name</label>
                    <input
                      type="text"
                      name="senderName"
                      id="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                      <div className="flex flex-col py-2">
                        <label htmlFor="email" className="uppercase text-sm py-2 dark:text-white">E-mail</label>
                        <input
                          type="email"
                          name="senderEmail"
                          id="email"
                          className="border-2 rounded-lg p-3 flex border-gray-300"
                          required
                        />
                      </div>
                    <div className="flex flex-col py-2">
                      <label htmlFor="phone" className="uppercase text-sm py-2 dark:text-white">Phone</label>
                      <input
                        type="tel"
                        name="senderPhone"
                        id="phone"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                    
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="message" className="uppercase text-sm py-2 dark:text-white">Your Question</label>
                    <textarea
                      name="message"
                      id="message"
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows={10}
                      required
                    />
                  </div>
                  <div className=' flex flex-col items-center py-4'>
                    <div className='flex items-center '>
                      <span><input type='checkbox' className='w-6 h-6 ' /></span>
                      <span className='px-4'> I accept the privacy and terms</span>
                    </div>
                    <div>
                      <button type='submit' className='bg-[#18F0F0] dark:bg-slate-100   p-4 mt-4 text-gray-100 font-bold' 
                        
                    >Send Question</button>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>  
            
          
        
     </div>
    </div>
  )
}

export default Faq