import React from 'react'
import { Link } from 'react-router-dom'
import { Label, TextInput, Button } from 'flowbite-react'
export default function SignIn() {
  return (

    <div className='min-h-screen mt-20 '>
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row
      gap-5 md:items-center">
        {/*left */}
        <div className='flex-1' >
          <Link to="/" className='text-4xl font-bold dark:text-white  '>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-xl text-white
         ' >Asad's</span>
            blog
          </Link>
          <p className='text-sm mt-5'> This blog website where you
            can write your articles and can like an
            d comment on others
            blogs
          </p>
        </div>
        {/*right */}
        <div className="flex-1">
          <form className='gap-4 flex flex-col'>
            
            <div >
              <Label value='Email'></Label>
              <TextInput type='email' placeholder='Name@company.com' id='email' />
            </div>
            <div >
              <Label value='Password'></Label>
              <TextInput autoComplete='password' type='password' placeholder='Password' id='password' />
            </div>
           
              <Button className='sm' gradientDuoTone='purpleToBlue' type='submit' pill outline>SignIn</Button>
            
          </form>
          <div className='mt-5 flex text-sm gap-2'>
            <span>
              Don't Have an account?
            </span>
            <Link  to='/SignUp' className='text-blue-500' >     Sign UP </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
