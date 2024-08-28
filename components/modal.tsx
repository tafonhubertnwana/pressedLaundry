import React from 'react'


const Modal = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Schedule a Pickup</h3>
            <div>
            <form>
              <div className="flex flex-col py-2">
                <input
                  type="text"
                  name="senderName"
                  id="name"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 w-full py-2">
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
                    placeholder='Phone'
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                
              </div>
              <div className="flex flex-col py-2">
                <input
                  type="text"
                  name="senderName"
                  id="name"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <textarea
                  name="message"
                  id="message"
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows={5}
                  placeholder='Your comment'
                  required
                />
              </div>
              <div className=' flex flex-col items-center py-4'>
              
                <div>
                  <button type='submit' className='bg-[#18F0F0] dark:bg-slate-100   p-4 mt-4 text-gray-100 font-bold' 
                    
                >Order Now</button>
                </div>
              </div>
            </form>
            </div>
        </div>
      </dialog>
    </>
  )
}

export default Modal