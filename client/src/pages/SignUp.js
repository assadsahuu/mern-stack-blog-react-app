import React from 'react'
import { Link } from 'react-router-dom'
import { Label, TextInput, Button } from 'flowbite-react'
export default function SignUp() {
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
              <Label value='Username'></Label>
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div >
              <Label value='Email'></Label>
              <TextInput type='text' placeholder='Name@company.com' id='email' />
            </div>
            <div >
              <Label value='Password'></Label>
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
           
              <Button className='sm' gradientDuoTone='purpleToBlue' type='submit' pill outline>SignUp</Button>
            
          </form>
          <div className='mt-5 flex text-sm gap-2'>
            <span>
              Have an account?
            </span>
            <Link  to='/SignIn' className='text-blue-500' >     Sign In </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
