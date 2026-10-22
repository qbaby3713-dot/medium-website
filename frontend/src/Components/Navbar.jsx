import React from 'react'
import Logo from '../images/logo.png'
import { Search , FilePenLine} from 'lucide-react'
import { Outlet } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar gap-4 justify-between font-gelasio'>
      <div className='flex' >
        <img className='h-10  ' src={Logo} alt="" />

        <div className='flex relative ml-10'>
          <input className=' absolute pl-9 bg-gray-100 hover:bg-gray-200 rounded-full p-3
        'placeholder='Search'
            type="text" />
          <Search className='absolute left-2 -translate-y-1/2 top-1/2' />
        </div>
      </div>

      <div className='items-center flex ml-auto gap-6 '>
        <button className='justify-center items-center gap-2 text-xl hover:bg-gray-300 md:w-auto hidden rounded-full p-3 md:flex'> <FilePenLine
        className='text-2xl'/>
        Write
        </button>
        <button className='border bg-black text-amber-50 rounded-4xl p-3 w-30 text-xl  hover:bg-gray-800'>Sign In</button>
        <button className=' w-30 bg-gray-100 text-xl hover:bg-gray-300 rounded-full p-3 hidden md:block'>Sign Up</button>
      </div>

      <Outlet/>
    </div>
    
  )
}

export default Navbar
