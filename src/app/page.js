import Search from './components/search/page'
import {FaRegUserCircle} from "react-icons/fa";
import {GoTriangleUp} from "react-icons/go";




export default function Home() {
  
  return (
    <main >


  <div className='inline-block  align-middle m-8 cursor-pointer group'>
      <FaRegUserCircle size={25}/>
      <div className='w-0 h-0 
   border-l-[10px] border-l-transparent
   border-b-[20px] border-b-orange-500
   border-r-[10px] border-r-transparent'>

      </div>
      
      <div className=' text-black bg-[#ECF8F9] hidden group-hover:block rounded-lg shadow-2xl w-75'>

      
<div className=' text-center py-8 bg-[#A076F9] rounded-t-lg'>
  <button className=' text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm rounded-md px-5 py-2 '>Login to your account</button>
</div>

<div className='text-center py-8'>
<div>
    <button className='text-white text-center bg-blue-700 hover:bg-blue-800 font-medium text-sm rounded-md px-5 py-2 '> Signup </button>
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


  
  




      <div>
        <Search />
      </div>

      

      
      

    </main>
  )
}


{/*<div class="p-10">
  <div class="group relative w-max">
    <button>Click me!</button>
    <span
      class="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100" >
      This is a button.
    </span>
  </div>
</div>
<div class="relative inline-block text-left">
  <div class="group inline-block">
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Hover me</button>
    <div class="hidden group-hover:block absolute z-10 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg">
      <a href="#" class="block px-4 py-2 hover:bg-gray-200">Login</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-200">Sign Up</a>
    </div>
  </div>
</div>

<div className='py-10 h-full w-full'>
        <div className='container mx-auto px-6 flex flex-col items-start pl-12 md:pl-0 md:items-center'>
          <div className='h-0 md:h-12'></div>
          <div className='flex-col md:flex-row flex items-center md:justify-center'>

          </div>
        </div>

      </div>


 */}
