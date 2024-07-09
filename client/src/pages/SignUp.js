import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react'
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');
    }
    try {
      setloading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),

      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setloading(false);
      if(res.ok){
        navigate('/SignIn'); 
      }
    } catch (error) {
      setErrorMessage(error.message);
      setloading(false);
    }
  };
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
          <form className='gap-4 flex flex-col' onSubmit={handleSubmit}>
            <div >
              <Label value='Username'></Label>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} />
            </div>
            <div >
              <Label value='Email'></Label>
              <TextInput autoComplete='email' type='email' placeholder='Name@company.com' id='email' onChange={handleChange} />
            </div>
            <div >
              <Label value='Password'></Label>
              <TextInput autoComplete='new-password' type='password' placeholder='Password' id='password' onChange={handleChange} />
            </div>

            <Button className='sm' gradientDuoTone='purpleToBlue' type='submit'
              disabled={loading} pill outline>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign Up'
              }
            </Button>

          </form>
          <div className='mt-5 flex text-sm gap-2'>
            <span>
              Have an account?
            </span>
            <Link to='/SignIn' className='text-blue-500' >     Sign In </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5 " color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}
