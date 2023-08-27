"use client"
import React, {useState, useEffect} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {CiSquareRemove} from "react-icons/ci";
import GoogleButton from 'react-google-button'
import { BsFillShieldLockFill } from 'react-icons/bs';
import Header from '../header/page'
import Link from 'next/link'
import Login from '../login/page'
export default function Lmodal({visible, onClose}) {

  const [modal, setModal] = useState(false)
  const handleClose = () => setModal(false)
  const openModal = () => setModal(true)


    const handlelogin = () => {
      setModal(true)
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
          <div><Login/></div>
          
          
	          
          <CiSquareRemove id='container' onClick={handleSignClose} className='cursor-pointer hidden md:block ' size={30}/>
      </div>
          
  </div>

    
  )
}



{/* */}