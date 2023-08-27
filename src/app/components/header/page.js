"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import {CgMenu} from "react-icons/cg";
import {BsX} from "react-icons/bs";
import {FaRegUserCircle} from "react-icons/fa";
import {FaHandPointRight} from "react-icons/fa";
import { useRouter } from "next/navigation"
import Modal from '../Modal/page'
import {GoTriangleUp} from "react-icons/go";
import Signup from '../Signup/page'
import Lmodal  from '../lmodal/page';


export default function Header() {
    const [modal, setModal] = useState(false)
    const [lmodal, setLModal] = useState(false)
    const [signup, setSignup] = useState(false)
    const handleLmodalClose = () => setLModal(false)

    const handleSignClose = () => setSignup(false)
    const handleClose = () => setModal(false)
    const openModal1 = () => setIsModal(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const router = useRouter();
  return (
    <div>
        <header className="sticky z-30 w-full p-6 bg-white sm:px-4 shadow">
                <div className="flex items-center justify-between mx-auto max-w-7xl">
                    <Link href="/">
                        <span className="text-2xl font-bold text-purple-600 font-serif">Logo</span>
                    </Link>
                    <div className="flex items-center space-x-1">
                        <ul className="hidden space-x-2 md:inline-flex">
                            <Link href="/" className="px-4 py-2 font-semibold text-gray-600 rounded"><li>Home</li></Link>
                            <Link href="/components/header/courses" className="px-4 py-2 font-semibold text-gray-600 rounded"><li>Courses</li></Link>
                            <Link href="/components/header/college" className="px-4 py-2 font-semibold text-gray-600 rounded"><li>College</li></Link>
                            <Link href="/components/header/about" className="px-4 py-2 font-semibold text-gray-600 rounded"><li>About Us</li></Link>
                            <Link href="/data" className="px-4 py-2 font-semibold text-gray-600 rounded"><li>Data</li></Link>

                        </ul>
                        {/*<ul>
                        <button onClick={() => setModal(true)} className=' text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm rounded-md px-5 py-2 '>Login/Signup</button>
                        <Modal onClose={handleClose}  visible={modal}/>
  </ul>*/}
  <ul>
  <Modal onClose={handleClose}  visible={modal}/>
  <Signup onClose={handleSignClose} visible={signup} setSignup={setSignup} signup={signup} />
  <Lmodal onClose={handleLmodalClose} visible={lmodal}/>

  </ul>
                        <ul>
                        <div className='cursor-pointer  group'>
                            <FaRegUserCircle size={25} className='mr-2'/>
                            <div>
                            
            
                            <div className=' absolute right-[25px] lg:right-[85px] text-black bg-[#ECF8F9] hidden group-hover:block rounded-lg shadow-2xl w-75 mt-2 '>
                            <div className=' lg:visible  invisible w-0 h-0 
                                            border-l-[6px] border-l-transparent
                                            border-b-[10px] border-b-[#AFD3E2]
                                            border-r-[6px] border-r-transparent  group-hover:block absolute  top-[-8px] right-12'>

                            </div>
                                <div className=' text-center py-8 bg-[#AFD3E2] rounded-t-lg'>
                                    <button onClick={() => setModal(true)} className=' text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm rounded-md px-5 py-2 '>Login to your account</button>
                                    
                                    
                                    
                                </div>
                                
                                <div className='text-center py-8'>
                                    <div>
                                       <button onClick={ () => setSignup(true) } className='text-white text-center bg-[#2E4F4F] hover:bg-[#2C3333] font-medium text-sm rounded-md px-5 py-2 '> Create an account </button>
                                       
                                       
                                    </div>
                                    <div className='pt-5 px-2'>
                                        <h4 className='text-teal-950 font-bold'>By creating an account you can -</h4>
                                        <ul className='text-left pl-2 mt-2'>
                                          <li className='flex'><FaHandPointRight className='pt-0.5'/><h1 className='pl-2'> Apply to colleges directly</h1></li>
                                          <li className='flex'><FaHandPointRight className='pt-0.5'/><h1 className='pl-2'>Shortlist colleges for quick access</h1></li>
                                          <li className='flex'><FaHandPointRight className='pt-0.5'/><h1 className='pl-2'>Get free counselling</h1></li>
                                        </ul>
                                    </div>     
                                </div>
                            </div> 
                            </div>
                        </div>
                        </ul>
                        <div className="inline-flex md:hidden">
                            <button onClick={toggleMenu} className="flex-none px-2 ">
                                <CgMenu/>
                            </button>
                        </div>
                    </div>
                    <div className={menuOpen ?"fixed top-0 left-0 w-[100%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"} >
                        <div className='flex w-full items-center justify-end'>
                            <div onClick={toggleMenu} className='cursor-pointer'>
                                <BsX className="h-8 w-8 text-[#F6B519]"/>
                            </div>
                        </div>
                        <div className='flex-col py-4'>
                        <ul className="">
                            <Link href="/" className="py-4 hover:underline hover:decoration-[#F6B519]"><li>Home</li></Link>
                            <Link href="/components/header/courses" className="py-4 hover:underline hover:decoration-[#F6B519]"><li>Courses</li></Link>
                            <Link href="/components/header/college" className="py-4 hover:underline hover:decoration-[#F6B519]"><li>College</li></Link>
                            <Link href="/components/header/about" className="py-4 hover:underline hover:decoration-[#F6B519]"><li>About Us</li></Link>
                            <Link href="/data" className="py-4 hover:underline hover:decoration-[#F6B519]"><li>Data</li></Link>

                        </ul>
                        </div>
                    </div>
                </div>
            </header>    
    </div>
  )
}
