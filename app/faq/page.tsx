import Image from 'next/image'
import React from 'react'
import banner from '@/public/assets/dst-bg-img.jpg'

const Faq = () => {
  return (
    <div className='w-full '>
      <div className='relative'>
        <Image 
          src={banner} 
          alt='banner' 
          className='w-full object-cover'
          layout='responsive' // Ensure the image scales responsively
          width={1200} // Specify the aspect ratio width
          height={600} // Specify the aspect ratio height
        />
        <div className='absolute top-[0%] left-[15%] md:top-[30%] md:left-[10%] p-4 md:p-6'>
          <h5 className='text-white text-sm md:text-base'>Home / Faq</h5>
          <h1 className='text-white text-2xl md:text-6xl font-bold'>FAQ</h1>
        </div>
      </div>

      <div className="container m-auto">
        <div className='flex flex-col items-center pt-8 '>
          <h5 className=" font-bold md:py-4  text-[#18F0F0]">[ Frequently Asked Questions ]</h5>
          <div className='text-center md:w-[50%] py-4'>
            <h2>Reliable Answers to Our Most
            Common Questions</h2>
            <p className='text-lg py-4'>We can save you money on soap, water, heating and electricity. So you can enjoy even more of the things you love. Our prices are simple and affordable.</p>
          </div>
        </div>
        <div className='sm:p-4'>
          <div  className='font-bold text-xl'>Your First Order!</div>
          <div className='grid md:grid-cols-2 gap-8 mb-[4%]'>
            <div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">What should I prepare for the first laundry pickup?</div>
                <div className="collapse-content">
                  <p className='text-xl'>Confirm the pickup time and address, and ensure your laundry is properly sorted and bagged. Label the bags with your name and contact information. Prepare any special instructions for handling. Make sure someone is available to hand over the items.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Can I add extra items to my order when you collecting my laundry?</div>
                <div className="collapse-content">
                  <p className='text-xl'>Yes, you can add extra items at the time of pickup. Please ensure they are clearly labeled and inform the driver of any additions. For large changes, it's best to contact our customer service to update your order.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Can I order by phone or email?</div>
                <div className="collapse-content">
                  <p className='text-xl'> Yes, you can place an order by phone or email. For phone orders, call our customer service team. To order via email, send your request to our email with details of your laundry items and preferred pickup time.</p>
                </div>
              </div>
              <div className="collapse rounded-none collapse-plus bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Where are my clothes cleaned?</div>
                <div className="collapse-content">
                  <p className='text-xl'>Your clothes are cleaned at PressedPerfect laundromats, where we use advanced equipment and eco-friendly detergents. Our experienced staff ensures each item is handled with care and cleaned to the highest standards.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="collapse collapse-plus  rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">Why do women’s blouses cost more than men’s shirt?</div>
                <div className="collapse-content">
                  <p className='text-xl'> Women’s blouses often cost more due to factors such as more intricate designs, specialized fabrics, and additional detailing. These factors contribute to higher production costs. Additionally, market trends and pricing strategies can influence the cost differences between men’s and women’s apparel.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Are there any fabrics you don't clean?</div>
                <div className="collapse-content">
                  <p className='text-xl'> Yes, we do not clean certain fabrics, such as those labeled "dry clean only," delicate materials like silk or wool, or items with special care instructions that exceed our facility's capabilities. For best results, please refer to the care label on your items or contact us for specific guidance.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">What if my clothes are heavily stained?</div>
                <div className="collapse-content">
                  <p className='text-xl'>If your clothes are heavily stained, please inform us at the time of pickup. We will assess the stains and use specialized treatments to address them. Note that while we strive to remove all stains, some may be difficult to fully eliminate depending on the fabric and nature of the stain.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">How can I pay for the services?</div>
                <div className="collapse-content">
                  <p className='text-xl'>You can pay for our services through various methods, including cash, credit/debit cards, and mobile payment apps. For convenience, you can also set up automatic billing if you have a recurring service. Please check with our customer service team for specific payment options available in your area.</p>
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
                  <p className='text-xl'>If your clothes are damaged, please notify us immediately. We take great care in handling items, but if damage occurs, we will investigate and work with you to resolve the issue. Compensation or remediation options will be provided based on our policy and the extent of the damage.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">What all is included in your service?</div>
                <div className="collapse-content">
                  <p className='text-xl'>Our laundry service includes pickup and delivery, professional cleaning of various fabrics, stain treatment, and pressing or folding. We also offer options for special care items and provide flexible scheduling to meet your needs. For specific details or additional services, please contact our customer service team.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Do you furnish the cleaning supplies?</div>
                <div className="collapse-content">
                  <p className='text-xl'>No, we do not furnish cleaning supplies for items cleaned at home. We provide all necessary supplies for items cleaned at our facility, including eco-friendly detergents and specialized treatments. If you need cleaning supplies for home use, please check our website or contact customer service for recommendations.</p>
                </div>
              </div>   
            </div>
            <div>
              <div  className='font-bold text-xl'>Wash, Tumble Dry & Fold</div>
              <div className="collapse collapse-plus  rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-bold">Do I need to weigh my Wash, Tumble Dry & Fold bag?</div>
                <div className="collapse-content">
                  <p className='text-xl'>It depends on your situation. If you're using a laundry service that charges by weight, weighing your bag can help you estimate the cost and avoid surprises. If you’re simply organizing your laundry and not concerned about costs, weighing the bag is usually unnecessary.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">What temperature do you wash the clothes at?</div>
                <div className="collapse-content">
                  <p className='text-xl'>Cold Water (60-80°F / 15-27°C): For delicate fabrics and dark colors.
Warm Water (90-110°F / 30-43°C): For synthetics and moderately soiled items.
Hot Water (120-140°F / 49-60°C): For white cottons and heavily soiled clothes.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none bg-base-200 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-bold">Do I get to keep the bag?</div>
                <div className="collapse-content">
                  <p className='text-xl'> It depends on the laundry service or retailer. Some provide reusable bags that you can keep, while others may expect you to return the bag or use it only for the duration of the service. Check with the provider to understand their policy regarding the bag.</p>
                </div>
              </div>
            </div>
              
          </div>
        </div> 
        <div className="flex flex-col items-center pt-10">
         <div className='text-center md:w-[50%] '>
            <h2>Ask Your Question</h2>
            <p className='text-lg py-4'>We look forward to helping you create and maintain a clean, healthy environment that’s as enjoyable as it is functional.</p>
          </div>
        </div> 
        <div className="md:w-[50%] m-auto">
          <div className="p-4">
            <form>
              <div className="flex flex-col py-2">
                <input
                  type="text"
                  name="senderName"
                  id="name"
                  placeholder='Your Name'
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <input
                      type="email"
                      name="senderEmail"
                      id="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      placeholder='E-mail'
                      required
                    />
                  </div>
                <div className="flex flex-col py-2">
                  <input
                    type="tel"
                    name="senderPhone"
                    id="phone"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    placeholder='Phone'
                  />
                </div>
                
              </div>
              <div className="flex flex-col py-2">
                <textarea
                  name="message"
                  id="message"
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows={10}
                  placeholder='Your Question'
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