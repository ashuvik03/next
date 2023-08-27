import React from 'react'

export default function Toolpit() {


  return (
    
        <div className='inline-block align-middle cursor-pointer group inline-block'>
                            <FaRegUserCircle size={25}/>
                            <div className=' absolute right-[70px] z-40 text-black bg-[#ECF8F9] hidden group-hover:block mt-2 rounded-lg shadow-2xl w-75'>
                                <div className=' text-center py-8 bg-[#A076F9] rounded-t-lg'>
                                    <button onClick={() => setModal(true)} className=' text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm rounded-md px-5 py-2 '>Login to your account</button>
                                    <Modal onClose={handleClose}  visible={modal}/>
                                </div>
                                
                                <div className='text-center py-8'>
                                    <div>
                                       <button onClick={ () => setSignup(true) }className='text-white text-center bg-blue-700 hover:bg-blue-800 font-medium text-sm rounded-md px-5 py-2 '> Signup </button>
                                       <Signup onClose={handleSignClose} visible={signup}/>
                                       
                                    </div>
                                    <div className='pt-5 px-2'>
                                        <h4 className='text-black'>By creating an account you can -</h4>
                                        <ul className='text-grey'>
                                          <li>Apply to colleges directly</li>
                                          <li>Shortlist colleges for quick access</li>
                                          <li>Get free counselling</li>
                                        </ul>
                                    </div>     
                                </div>
                            </div> 
                        </div>
      
    
  )
}
