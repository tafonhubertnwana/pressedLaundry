import React from 'react'
import { GiCheckMark} from 'react-icons/gi';
import { MdLocalLaundryService } from "react-icons/md";
import { TbIroningSteam, TbWashTemperature6 } from "react-icons/tb";

const PricePackage = () => {
  return (
    <>
      <div className="w-full">
        <div className="container m-auto">
            <div className='flex flex-col items-center pb-[5%] '>
              <h5 className=" font-bold py-4  text-[#18F0F0]">[ What we offer ]</h5>
              <div className='text-center md:w-[50%] py-4'>
                <h2>Price Packages</h2>
                <span>Our prices are simple and affordable which are easy on pocket
                in comparison with the high street prices</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-x-[15%] p-8">
              <div className='relative bg-slate-100 py-10 shadow-gray-300 shadow-lg'>
                <div className='flex flex-col items-center'>
                  <div className='absolute top-[-20%]'>
                    <div className='p-6  bg-[#18F0F0] rounded-full my-4 '>
                      < TbWashTemperature6 size={100} className='text-white' /> 
                    </div>
                  </div>
                  <div className='pt-8'>
                    <h4>Standard Package</h4>
                    <h6 className='text-[#18F0F0] py-2'>100 clothes Per Month</h6>
                  </div>
                  <div className='border-b-2'>
                    <ul className='py-4'>
                    <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2 '>Pick-up every 2 weeks</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2 '>washing</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Ironing</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Perfume</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Free Home Delivery</span></li> 
                    </ul>
                  </div>
                  <div className='p-4'>
                    <h3 className='text-[#18F0F0]'>25,000CFA</h3>
                  </div>
                </div>
              </div>
              <div className='relative bg-slate-100 py-10 shadow-gray-300 shadow-lg'>
                <div className='flex flex-col items-center'>
                  <div className='absolute top-[-20%]'>
                    <div className='p-6  bg-[#18F0F0] rounded-full my-4 '>
                      < MdLocalLaundryService size={100} className='text-white' /> 
                    </div>
                  </div>
                  <div className='pt-8 border-b-4'>
                    <h4>Premium Package</h4>
                    <h6 className='text-[#18F0F0] py-2'>150 clothes Per Month</h6>
                    <div className='self)center'>
                      <ul className='py-4'>
                      <li className='flex py-2'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2 '>Pick-up every 10 days</span></li>
                        <li className='flex py-2'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2 '>washing</span></li>
                        <li className='flex py-2'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Ironing</span></li>
                        <li className='flex py-2'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Perfume</span></li>
                        <li className='flex py-2'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Free Home Delivery</span></li> 
                      </ul>
                    </div>
                  </div>
                  <div className='pt)'>
                    <h3 className='text-[#18F0F0]'>35,000CFA</h3>
                  </div>
                </div>
              </div>
              <div className='relative bg-slate-100 py-10 shadow-gray-300 shadow-lg'>
                <div className='flex flex-col items-center'>
                  <div className='absolute top-[-20%]'>
                    <div className='p-6  bg-[#18F0F0] rounded-full my-4 '>
                      < TbIroningSteam size={100} className='text-white' /> 
                    </div>
                  </div>
                  <div className='pt-8'>
                    <h4>Yearly Package</h4>
                    <h6 className='text-[#18F0F0] py-2'>150 clothes monthly</h6>
                  </div>
                  <div className='border-b-4'>
                    <ul className='py-4'>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]' /></span> <span className='pl-2 '>washing</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Ironing</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Perfume</span></li>
                      <li className='flex py-4'><span><GiCheckMark  size={20} className='text-[#18F0F0]'/></span> <span className='pl-2 '>Free Home Delivery</span></li> 
                    </ul>
                  </div>
                  <div className='p-4'>
                    <h3 className='text-[#18F0F0]'>250,000CFA</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PricePackage