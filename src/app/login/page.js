"use client"
import React,{useState} from 'react'

const Login =() => {
  const [modal, setModal] = useState(false)
  const handleClose = () => setModal(false)
  return (
    <div className='bg-blue-400 bg-opacity-30'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center py-3'>
          <button onClick={() => setModal(true)} className='bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl'>
            Login
          </button>
        </div>
        
      </div>
      <Modal onClose={handleClose}  visible={modal}/>
    </div>
    
  )
}

export default Login


{/*<div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flrx-col'>
        <button className='text-blak text-xl palce-self-end'>X</button>
        <div className='bg-white p-2 rounded'>Login page</div>
      </div>
      
    </div> */}