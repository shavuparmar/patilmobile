import { AiOutlineSafety } from 'react-icons/ai'
import NavBar from '../Common/NavBar'
import { MdCall, MdLocationOn, MdOutlineStar } from 'react-icons/md'
import { TimerIcon } from 'lucide-react'
import { Laptop, MobileRepair, MobileScreen, MobileinTable, Repairing } from "../assets/Image"
import {
  Aadharimg,
  BankingIcon,
  OtherImg,
  repairingimg,
} from "../assets/Icon/Icon"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-yellow-100 w-full py-10 animate-fadeIn">
        <div className="p-5">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-[12px] px-2 py-1 rounded-lg bg-blue-200 flex items-center space-x-1">
              <MdCall size={18} />
              <span>Mobile Expert</span>
            </span>
            <span className="text-[12px] px-2 py-1 rounded-lg bg-green-200 flex items-center space-x-1">
              <AiOutlineSafety size={18} />
              <span>Mobile Expert</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20 gap-10">
          <div className="grid gap-3">
            <h2 className='text-4xl md:text-5xl font-serif'>Your Trusted </h2>
            <h2 className='text-4xl md:text-5xl text-blue-800 font-serif'>Mobile Repaired <span className='text-black'>&</span></h2>
            <h2 className='text-green-950 text-4xl md:text-5xl font-serif'>Finacial Service</h2>
            <h2 className='text-red-950 text-4xl md:text-5xl font-serif'>Center</h2>
            <p className='w-full md:w-2/3 text-[16px] md:text-[18px] mt-5 font-serif'>
              Professional Mobile Phone repair, Screen replacement, Aadhar card money withdrawal, And digital payment service - all under one roof in the heart of the city
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <span className="text-[18px] px-3 py-2 flex items-center space-x-2">
                <TimerIcon className="w-5 h-5 text-blue-600" />
                <span>Same Day Repair</span>
              </span>
              <span className="text-[18px] px-3 py-2 flex items-center space-x-2">
                <AiOutlineSafety className="w-5 h-5 text-blue-600" />
                <span>90 Days Warranty</span>
              </span>
              <span className="text-[18px] px-3 py-2 flex items-center space-x-2">
                <MdOutlineStar className="w-5 h-5 text-blue-600" />
                <span>5 Star Services</span>
              </span>
              <span className="text-[18px] px-3 py-2 flex items-center space-x-2">
                <MdLocationOn className="w-5 h-5 text-blue-600" />
                <span>Center Location</span>
              </span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <div className="flex flex-col gap-3">
              <img src={MobileScreen} className='w-32 md:w-40' alt="" />
              <img src={Laptop} className='w-32 md:w-40' alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <img src={MobileRepair} className='w-32 md:w-40' alt="" />
              <img src={MobileinTable} className='w-32 md:w-40' alt="" />
              <img src={Repairing} className='w-32 md:w-40' alt="" />
            </div>
          </div>
        </div>

        <div className="bg-black h-1 w-[95%] mx-auto mt-10 rounded-md"></div>

        <div className="w-full flex justify-center mt-10">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center w-40">
              <h1 className='text-4xl md:text-5xl text-blue-500'>5000+</h1>
              <h6 className='text-sm md:text-md'>Phone Repaired</h6>
            </div>
            <div className="text-center w-40">
              <h1 className='text-4xl md:text-5xl text-blue-500'>10,000+</h1>
              <h6 className='text-sm md:text-md'>Aadhar Transactions</h6>
            </div>
            <div className="text-center w-40">
              <h1 className='text-4xl md:text-5xl text-blue-500'>5+</h1>
              <h6 className='text-sm md:text-md'>Years Of Experience</h6>
            </div>
            <div className="text-center w-40">
              <h1 className='text-4xl md:text-5xl text-blue-500'>100%</h1>
              <h6 className='text-sm md:text-md'>Customer Satisfaction</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-5">
        <h1 className='bg-gray-200 text-center text-2xl w-fit px-5 text-black rounded-lg mt-10 py-2 mx-auto'>
          Our Services
        </h1>

        <div className="text-center mx-auto mt-5">
          <h1 className='text-3xl md:text-4xl'>Complete Mobile & Financial Solutions</h1>
          <h6 className='w-full md:w-1/2 text-center mx-auto mt-2 text-sm md:text-base'>
            From Smartphone repair to aadhar services, We provide everything you need for your mobile & financial requirement under one roof
          </h6>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-20">
          <div className="border-2 w-[280px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={repairingimg} className='w-24 mt-2 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600'>Mobile Repair Services</h1>
            <p className='text-sm mt-1'>Expert Repair for all smartphone brands</p>
            <div className="flex flex-col mt-2 gap-2">
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Screen Replacement</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Battery Change</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Water Damage</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Software Issue</p>
            </div>
          </div>

          <div className="border-2 w-[280px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={Aadharimg} className='w-28 -mt-5 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600'>Aadhar Card</h1>
            <p className='text-sm mt-1'>Money Withdrawal and digital service</p>
            <div className="flex flex-col mt-2 gap-2">
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Cash Withdrawal</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Balance Check</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Mini Statement</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Aadhar Update</p>
            </div>
          </div>

          <div className="border-2 w-[280px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={BankingIcon} className='w-24 mt-2 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600'>Digital Payment</h1>
            <p className='text-sm mt-1'>UPI, Wallet Recharge, Bill payments</p>
            <div className="flex flex-col mt-2 gap-2">
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Mobile Recharge</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Bill Payment</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Money Transfer</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>UPI Services</p>
            </div>
          </div>

          <div className="border-2 w-[280px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={OtherImg} className='w-24 mt-5 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600'>Other Services</h1>
            <p className='text-sm mt-1'>Additional tech and utility services</p>
            <div className="flex flex-col mt-2 gap-2">
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>SIM Card</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Memory Card</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Accessories</p>
              <p className='py-1 rounded bg-gray-300 w-60 mx-auto'>Tech Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
