import { AiOutlineSafety } from 'react-icons/ai'
import NavBar from '../Common/NavBar'
import { MdAppSettingsAlt, MdCall, MdLocationOn, MdOutlineStar, MdSafetyCheck } from 'react-icons/md'
import { TimerIcon } from 'lucide-react'
import { Laptop, MobileRepair, MobileScreen, MobileinTable, Repairing } from "../assets/Image"
import {
  Aadharimg,
  BankingIcon,
  OtherImg,
  repairingimg,
  AppleLogo,
  GoogleLogo, HuaweiLogo,
  MotorolaLogo, NokiaLogo, NothingLogo, OnePlusLogo, VivoLogo, SamsungLogo, XioamiLogo, OppoLogo, RealmeLogo,
  Quality, Quick, Safe, Team, Tools, Support, Phone, Email, Working, Map
} from "../assets/Icon/Icon"

import { RiTelegram2Fill } from 'react-icons/ri'
import { TiLocationArrow } from 'react-icons/ti'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-yellow-100 w-full mt-15" id='home'>
        <div className="p-5">
          <div className="flex gap-2 ml-5 sm:ml-10">
            <span className="text-[12px] px-2 py-1 rounded-lg bg-blue-200 flex items-center space-x-1">
              <MdCall size={18} />
              <span>Mobile Expert</span>
            </span>
            <span className="text-[12px] px-2 py-1 rounded-lg bg-green-200 flex items-center space-x-1">
              <AiOutlineSafety size={18} />
              <span>Aadhar Service</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 gap-10">
          <div className="grid gap-5">
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-serif'>Your Trusted </h2>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-serif'>Mobile Repaired <span className='text-black'>&</span></h2>
            <h2 className='text-green-950 text-3xl sm:text-4xl lg:text-5xl font-serif'>Finacial Service</h2>
            <h2 className='text-red-950 text-3xl sm:text-4xl lg:text-5xl font-serif'>Center</h2>
            <p className='lg:w-1/2 mt-5 text-[16px] sm:text-[18px] font-serif'>
              Professional Mobile Phone repair, Screen replacement, Aadhar card money withdrawal, And digital payment service - all under one roof in the heart of the city
            </p>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                <span className="text-[16px] px-3 py-2 flex items-center space-x-2">
                  <TimerIcon className="w-5 h-5 text-blue-600" />
                  <span>Same Day Repair</span>
                </span>
                <span className="text-[16px] px-3 py-2 flex items-center space-x-2">
                  <AiOutlineSafety className="w-5 h-5 text-blue-600" />
                  <span>90 Days Warranty</span>
                </span>
                <span className="text-[16px] px-3 py-2 flex items-center space-x-2">
                  <MdOutlineStar className="w-5 h-5 text-blue-600" />
                  <span>5 Star Services</span>
                </span>
                <span className="text-[16px] px-3 py-2 flex items-center space-x-2">
                  <MdLocationOn className="w-5 h-5 text-blue-600" />
                  <span>Center Location</span>
                </span>
              </div>
            </div>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-8 max-w-screen-xl mx-auto">
  {/* Column 1 */}
  <div className="flex flex-col gap-4">
    <img
      src={MobileScreen}
      alt="Mobile Screen"
      className="w-full object-cover rounded-xl max-w-full"
    />
    <img
      src={Laptop}
      alt="Laptop"
      className="w-full object-cover rounded-xl max-w-full"
    />
  </div>

  {/* Column 2 */}
  <div className="flex flex-col gap-4">
    <img
      src={MobileRepair}
      alt="Mobile Repair"
      className="w-full object-cover rounded-xl max-w-full"
    />
    <img
      src={MobileinTable}
      alt="Mobile in Table"
      className="w-full object-cover rounded-xl max-w-full"
    />
    <img
      src={Repairing}
      alt="Repairing"
      className="w-full object-cover rounded-xl max-w-full"
    />
  </div>
</div>

        </div>

        <div className="bg-black h-1 w-[95%] mx-auto mt-10 rounded-md"></div>

        <div className="w-full flex justify-center mt-5 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-5 text-center">
            <div>
              <h1 className='text-3xl sm:text-5xl text-blue-500'>5000+</h1>
              <h6 className='text-md'>Phone Repaired</h6>
            </div>
            <div>
              <h1 className='text-3xl sm:text-5xl text-blue-500'>10,000+</h1>
              <h6 className='text-md'>Aadhar Transactions</h6>
            </div>
            <div>
              <h1 className='text-3xl sm:text-5xl text-blue-500'>5+</h1>
              <h6 className='text-md'>Years Of Experience</h6>
            </div>
            <div>
              <h1 className='text-3xl sm:text-5xl text-blue-500'>100%</h1>
              <h6 className='text-md'>Customer Satisfaction</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white" id='service'>
        <h1 className='bg-gray-200 text-center text-2xl w-1/2 md:w-1/9 sm:w-1/2 text-black rounded-md mt-10 mb-10 py-1 mx-auto'>Our Services</h1>
        <div className="text-center mx-auto">
          <h1 className='text-2xl sm:text-4xl mt-2'>Complete mobile & Financial Solutions</h1>
          <h6 className='w-full sm:w-1/2 text-center mx-auto mt-2'>
            From Smartphone repair to Aadhar services, we provide everything you need for your mobile & financial requirement under one roof
          </h6>
        </div>

        <div className="mb-20 mt-10 flex flex-wrap justify-center  gap-5">
          <div className="border-2 w-full sm:w-[300px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={repairingimg} className='w-32 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600 mt-2'>Mobile Repair Services</h1>
            <p className='text-[14px] mt-1'>Expert Repair for all smartphone brands</p>
            <div className="flex flex-col gap-2 mt-3">
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Screen Replacement</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Battery Change</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Water Damage</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Software Issue</p>
            </div>
          </div>

          <div className="border-2 w-full sm:w-[300px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={Aadharimg} className='w-36 -mt-5 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600 mt-2'>Aadhar Card</h1>
            <p className='text-[14px] mt-1'>Money Withdrawal and digital service</p>
            <div className="flex flex-col gap-2 mt-3">
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Cash Withdrawal</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Balance Check</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Mini Statement</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Aadhar Update</p>
            </div>
          </div>

          <div className="border-2 w-full sm:w-[300px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={BankingIcon} className='w-32 mx-auto' alt="" />
            <h1 className='text-xl text-blue-600 mt-2'>Digital Payment</h1>
            <p className='text-[14px] mt-1'>UPI, Wallet Recharge, Bill payments</p>
            <div className="flex flex-col gap-2 mt-3">
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Mobile Recharge</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Bill Payment</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Money Transfer</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>UPI Services</p>
            </div>
          </div>

          <div className="border-2 w-full sm:w-[300px] rounded-xl bg-yellow-50 text-center p-4">
            <img src={OtherImg} className='w-32 mx-auto mt-5' alt="" />
            <h1 className='text-xl text-blue-600 mt-2'>Other Services</h1>
            <p className='text-[14px] mt-1'>Additional tech and utility services</p>
            <div className="flex flex-col gap-2 mt-3">
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>SIM Card</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Memory Card</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Accessories</p>
              <p className='py-1 bg-gray-300 rounded mx-auto w-4/5'>Tech Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 text-center w-full px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Need immediate service?</h1>
        <h5 className="text-base sm:text-lg mb-6">Call us or visit our shop for assistance</h5>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          {/* Call Section */}
          <div className="flex items-center gap-2">
            <MdCall size={24} />
            <span className="text-base sm:text-lg">+91 99887 76655</span>
          </div>

          {/* Divider - only visible on larger screens */}
          <div className="hidden sm:block w-px h-8 bg-gray-500"></div>

          {/* Location Section */}
          <div className="flex items-center gap-2">
            <MdLocationOn size={24} />
            <span className="text-base sm:text-lg">Surat, Gujarat, India</span>
          </div>
        </div>
      </div>




      <div className="text-center px-4">
        <h1 className="bg-gray-200 text-black rounded-md py-1 mx-auto mt-10 mb-10 text-2xl sm:w-1/2 w-1/1 max-w-md">
          Supported Brands
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-15 mt-5 bg-white shadow-lg items-center px-4 py-6">
          <img src={AppleLogo} className="w-16 sm:w-12 mx-auto" alt="Apple Logo" />
          <img src={SamsungLogo} className="w-24 mx-auto" alt="Samsung Logo" />
          <img src={RealmeLogo} className="w-16 sm:w-12 mx-auto" alt="Realme Logo" />
          <img src={XioamiLogo} className="w-16 sm:w-12 mx-auto" alt="Xioami Logo" />
          <img src={NothingLogo} className="w-24 mx-auto" alt="Nothing Logo" />
          <img src={GoogleLogo} className="w-24 mx-auto" alt="Google Logo" />
          <img src={OnePlusLogo} className="w-28 mx-auto" alt="OnePlus Logo" />
          <img src={OppoLogo} className="w-24 mx-auto" alt="Oppo Logo" />
          <img src={VivoLogo} className="w-24 mx-auto" alt="Vivo Logo" />
          <img src={HuaweiLogo} className="w-20 mx-auto" alt="Huawei Logo" />
          <img src={NokiaLogo} className="w-24 mx-auto" alt="Nokia Logo" />
          <img src={MotorolaLogo} className="w-24 mx-auto" alt="Motorola Logo" />
        </div>
      </div>


      <div className="" id="About">
        <h1 className="bg-gray-200 text-center text-xl w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 text-black rounded-md mt-0 mb-5 py-1 mx-auto">
          Why Choose PatilMobile
        </h1>

        <div className="text-center items-center px-4">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl">
            Your Trusted Partner for mobile & Financial Services
          </h2>
          <h6 className="text-[16px] sm:text-base md:text-lg w-full sm:w-4/5 md:w-2/3 mx-auto mt-2">
            With years of experience and thousands of satisfied customers, we deliver exceptional service quality and complete peace of mind
          </h6>
        </div>

        <div className="mb-5 mt-5 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[Safe, Quick, Quality].map((icon, i) => (
              <div
                key={i}
                className="border-2 w-11/12 sm:w-5/12 md:w-1/3 lg:w-1/4 grid gap-5 py-5 text-center shadow-xl rounded-lg mx-auto"
              >
                <img src={icon} className="w-16 mx-auto" alt="" />
                <h3 className="text-2xl text-black">
                  {
                    ['Trusted & Secure', 'Quick Service', 'Quality Guarantee'][i]
                  }
                </h3>
                <h5 className="w-4/5 mx-auto text-sm sm:text-base">
                  {
                    [
                      'Government certified for financial service with complete data security',
                      'Most repairs completed within same day, Financial services in minutes',
                      'Original parts with warranty and 100% satisfaction guarantee',
                    ][i]
                  }
                </h5>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-8 px-2">
            {[Team, Tools, Support].map((icon, i) => (
              <div
                key={i}
                className="border-2 w-11/12 sm:w-5/12 md:w-1/3 lg:w-1/4 grid gap-5 py-5 text-center shadow-xl rounded-lg mx-auto"
              >
                <img src={icon} className="w-16 mx-auto" alt="" />
                <h3 className="text-2xl text-black">
                  {['Expert Team', 'Latest Equipment', 'Customer Support'][i]}
                </h3>
                <h5 className="w-4/5 mx-auto text-sm sm:text-base">
                  {
                    [
                      'Experienced technicians and trained financial service operators',
                      'State-of-the-art repair tools and genuine replacement parts',
                      'Dedicated support team available for all your queries and concerns',
                    ][i]
                  }
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="" id="contact">
        <h1 className="bg-gray-200 text-center text-xl w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/9 text-black rounded-md mt-15 z-44 mb-5 py-1 mx-auto">
          Contact Us
        </h1>
        <div className="text-center px-4">
          <h1 className="text-3xl">Get in Touch with PatilMobile</h1>
          <h6 className="w-full sm:w-4/5 md:w-2/5 mx-auto mt-2">
            Visit our centrally located shop or contact us for any mobile repair or financial service needs. We're here to serve you
          </h6>
        </div>
        <div className="mb-10 mt-10 flex flex-col md:flex-row justify-center gap-10 px-4 md:px-20">
          {/* Left: Contact Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/3">
            <div className="border shadow-lg shadow-gray-800 rounded-xl flex   flex-col items-center text-center py-10">
              <img src={Phone} className="w-16" alt="Phone" />
              <h1 className="mt-2 text-2xl text-black">Call Us</h1>
              <p className="text-[14px]">+91 99887-76655</p>
              <p className="text-[14px]">+91 99887-76655</p>
            </div>
            <div className="border shadow-lg shadow-gray-800 rounded-xl flex  flex-col items-center text-center p-10">
              <img src={Map} className="w-16" alt="Map" />
              <h1 className="mt-2 text-2xl text-black">Visit Us</h1>
              <p className="text-[14px]">Kim Main Road 394110</p>
            </div>
            <div className="border shadow-lg shadow-gray-800 rounded-xl flex  flex-col items-center text-center p-10">
              <img src={Working} className="w-16" alt="Working Hours" />
              <h1 className="mt-2">Monday - Saturday</h1>
              <h1>9:00AM to 9:00PM</h1>
            </div>
            <div className="border shadow-lg shadow-gray-800 rounded-xl flex  flex-col items-center text-center p-10">
              <img src={Email} className="w-16" alt="Email" />
              <h1 className="text-2xl text-black mt-2">Email Us</h1>
              <p className="break-words text-[16px]">Patilmobile@gmail.com</p>
            </div>
          </div>

          {/* Right: Map + Buttons */}
          <div className="border-2 bg-gray-100 rounded-lg md:w-2/3 p-4">
            <div className="w-full h-72 sm:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.9224918625774!2d72.92470524722317!3d21.40114986886185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be03910dc14f8db%3A0x6afb516f5c4897b9!2sKim%2C%20station%20road%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1753597974128!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="PatilMobile Location"
              ></iframe>
            </div>

            <div className="mt-5 px-4">
              <h2 className="text-lg font-semibold">Shop Location</h2>
              <h6>Kim Main Road opp RK Park, Surat, Gujarat 394110</h6>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mt-4 px-4">
              <div className="bg-black text-white gap-2 rounded px-4 py-2 text-xl flex items-center justify-center cursor-pointer">
                <TiLocationArrow size={28} />
                <button>Get Direction</button>
              </div>
              <div className="bg-gray-300 rounded px-4 py-2 text-xl gap-2 flex items-center justify-center cursor-pointer">
                <RiTelegram2Fill size={24} />
                <button>Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </div>













    </>
  )
}
