"use client"
import React, {useState, useEffect} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {CiSquareRemove} from "react-icons/ci";
import GoogleButton from 'react-google-button'
import { BsFillShieldLockFill } from 'react-icons/bs';
//import OTPInput, { ResendOTP } from "otp-input-react";
import OTPLogin from '../../auth/login/page';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Signup from '../Signup/page';
import { useRouter } from "next/navigation"

const OTPInput = dynamic(() => import('otp-input-react'), { ssr: false });

export default function Modal({visible, onClose,props}) {
    const [phoneNumber,setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [otp,setOTP] = useState("")
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [signup, setSignup] = useState(false)
    const handleSignClose = () => setSignup(false)
    const openSignup = () => setSignup(true)
    const router = useRouter();



    const handleSendOTP = async () => {
      try {
        await OTPLogin.sendOTP(phoneNumber);
        setShowOTPInput(true)
        setMessage('OTP sent')
        
        toast.success('otp sent')
      } catch (error) {
        setMessage('Number Invalid')
        toast.error('Number Invalid')
      }
    };

    const verifyOTP = async () => {
      try {
        await OTPLogin.login(otp);
        
        toast.success('Login Success')
      } catch (error) {
        setMessage('OTP Invalid')

        toast.error('OTP Invalid')
        
      }
    };

    const notify = () => toast('Here is your toast.');

    const handleClose = (e) => {
        if(e.target.id === "container" )
        onClose()
    }

   
    if(!visible) return null;
  return (
    <div  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      
      
          <div class="h-sm md:flex ">
          <CiSquareRemove id='container' onClick={handleClose} className='cursor-pointer md:hidden ' size={30}/>
          
          
	          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i  justify-center items-center hidden">
            
              <div className='flex flex-col'>
                <h1 class="text-white font-bold text-4xl font-sans px-5">Login Here</h1>
			            <p class="text-white mt-5 px-5">We will send you an one time password on your mobile number</p>
              
		            
              </div>
              
	          </div>
            

	        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            
            
		        <div class="bg-white">
            
              
			        <h1 class="text-gray-800 font-bold text-2xl mb-1 px-7">Welcome to Affinity</h1>
			        <p class="text-sm font-normal text-gray-600 mb-7 px-7">Enter Valid Phonenumber for Login </p>
			        <div class="flex items-center py-2 px-3 bg-gradient-to-tr from-[#D8D9DA] to-[#ACB1D6] rounded-2xl mb-4">
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-center my-2 mb-4">
                    <BsFillShieldLockFill className="text-[#614BC3] mr-2" size={24} />
                    <h1 className="text-xl font-bold text-[#614BC3] ">OTP Login</h1>
                  </div>
                  {showOTPInput ? (
                    
                    <OTPInput value={otp} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure className='opt-container py-2 px-5' />
                  ) : (
                    <PhoneInput country={'in'} value={phoneNumber} onChange={setPhoneNumber} className=' mb-5 my-1 px-4'/>
                  )}
                    {showOTPInput ? (
                       <div className="text-center">
                          <button className="px-5 py-2 bg-gray-700 text-white text-sm rounded mb-5" onClick={verifyOTP}> Sign in  </button>
                          <ToastContainer />
                       </div>
                      ) : (
                             <div className='text-center' >
                                <button className="px-5 py-2 bg-gray-700 text-white text-sm rounded mb-5" onClick={handleSendOTP}>Generate OTP</button>
                                   <ToastContainer />
                                <div> 
                                    <button onClick={notify}>Make me a toast</button>
                                       <ToastContainer/>
                                </div>
                             </div>
                         )}
                  
                </div>
              </div >	
              <div className='px-7'><GoogleButton onClick={() => { console.log('Google button clicked') }}/></div>
              <Signup onClose={handleSignClose} visible={signup}/>

              <div className='px-7 py-3 md-5'> New to Affinity? <Link href={'#'} className='text-green-600' onClick={ () => {openSignup()} } >SignUp</Link> </div>
              <button onClick={()=>router.push("/components/Signup")}>Signup</button>
            
                						
		        </div>
	        </div>
          <CiSquareRemove id='container' onClick={handleClose} className='cursor-pointer hidden md:block ' size={30}/>
      </div>
          
  </div>

    
  )
}

















































































{/* useEffect(() => {
      // Check if the code is running in the client-side (browser) environment
      if (typeof window !== 'undefined') {
        // Code that depends on the window object can go here
      }
    }, []); 
  
  
  <PhoneInput country={'in'} value={phoneNumber} onChange={setPhoneNumber} className=' mb-5 my-4 px-3'/>
                  <div className="text-center">
                    <button className="px-5 py-2 bg-gray-700 text-white text-sm rounded mb-5" onClick={handleSendOTP}>
                      Generate OTP <p>{message}</p>
                    </button>
                  </div>
                  <OTPInput value={otp} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure className='opt-container ' />
                  <div className="text-center">
                      <button className="px-5 py-2 bg-gray-700 text-white text-sm rounded mb-5" onClick={verifyOTP}>
                         Sign in
                      </button>
                  </div>
                
                
                
                
                <div className="mb-2 text-gray-700">
                    {showOTPInput ? 'Enter the OTP sent to your phone:' : 'Enter your phone number:'}
                  </div>
                
                
                <OTPInput value={otp} onChange={setOTP} OTPLength={6} otpType="number" inputStyle="w-10 h-10 mb-4 text-xl font-semibold text-center bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"/>*/}

