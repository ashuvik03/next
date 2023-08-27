"use client"
import React, {useState} from 'react'
import 'react-phone-input-2/lib/style.css'
import {CiSquareRemove} from "react-icons/ci";
import GoogleButton from 'react-google-button'
import Link from 'next/link'
import Modal from '../Modal/page'
export default function Signup({visible, onClose,Signup,setSignup}) {

  const [modal, setModal] = useState(false)
  const handleClose = () => setModal(false)
  const openModal = () => setModal(true)



    const handlelogin = () => {
      setModal(true)
      setSignup(false)
    } 

    

    const handleSignClose = (e) => {
        if(e && e.target && e.target.id === "container" )
        onClose()
    }

   
    if(!visible) return null;
  return (
    
    <div  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      
      
          <div class="h-sm md:flex ">
          <CiSquareRemove id='container' onClick={handleSignClose} className='cursor-pointer md:hidden ' size={30}/>
          
          
	          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-[#19A7CE]  justify-center items-center hidden">
            
              <div className='flex flex-col'>
                <h1 class="text-white font-bold text-4xl font-sans px-5">Get Access to:</h1>
                <p class="text-white mt-5 px-5">Exams updates & important dates</p>
                <p class="text-white mt-5 px-5">E-books & Sample Papers</p>
                <p class="text-white mt-5 px-5">College & Course Brochures</p>
                <p class="text-white mt-5 px-5">Ask & get answers from experts & other users</p>
              
		            
              </div>
              
	          </div>
            

	        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            
            
		        <div class="bg-white">
            
              
			        <h1 class="text-gray-800 font-bold text-2xl mb-1 px-7">Welcome to Affinity</h1>
			        <p class="text-sm font-normal text-gray-600 mb-7 px-7">Create your account </p>
			        <div class="flex items-center py-1 px-3  mb-2">
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-center my-2 mb-3">
                  <form class="bg-white">
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					
					<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <span class="before:content-['+91'] pr-2"></span>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Phone Number" />
        
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="College Name" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
      <div class="flex items-start mt-2">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-black-500 dark:text-black-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>


   
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Signup</button>
							
		</form>
                    
                  </div>
                  
                </div>
              </div >	
              
              <div className='px-8'><GoogleButton onClick={() => { console.log('Google button clicked') }}/></div>
              <Modal onClose={handleClose}  visible={modal} />
              
              <div  className='px-7 py-3 md-5'> Already have an account? <Link href='#' className='text-green-600' id='container' onClick={handlelogin} >Login</Link></div>
            
                						
		        </div>
	        </div>
          <CiSquareRemove id='container' onClick={handleSignClose} className='cursor-pointer hidden md:block ' size={30}/>
      </div>
          
  </div>

    
  )
}



{/* */}