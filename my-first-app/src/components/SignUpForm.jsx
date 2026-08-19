import React from 'react'
import { useState } from 'react'

const SignUpForm = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [checked,setChecked] = useState(false)

    
    const isFormValid = !email || !password || !checked  
    console.log('isFormValid', isFormValid);
   

    const isPasswordValid = password.length >= 6
    console.log('isPasswordValid', isPasswordValid);
    const passwordError = password.length < 6 && password.length > 0 ? 'Password must be at least 6 characters long' : ''

    const handleSubmit = (e) => {
        e.preventDefault()  

    

     console.log(email,"email")
     console.log(password,"password")
     console.log(checked,'checked value ')
    }

    //using one state to manage multiple form fields
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     checked: false
    // })
  return (
    <div className='h-full w-[30%] justify-items-center bg-[white] rounded-2xl p-8 ml-[35%] shadow-lg flex flex-col gap-4  '>
      <h1 className='text-2xl font-bold'>Login</h1>
      <p className='text-gray-500 text-sm'>Login your account in seconds</p>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-gray-700'></label>
          <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' required='required' className='border border-gray-300 rounded-md p-2'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="password" className={`${isPasswordValid  ? 'text-green-500' : 'text-gray-700'}`}></label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Enter your password' required='required' className='border border-gray-300 rounded-md p-2'/>
          {passwordError && <p className='text-red-500 text-[10px]'>{passwordError}</p>}
        </div>
        <div className='flex items-center justify-between mt-4'>
          <label htmlFor="remember" className='flex items-center gap-2 text-[10px] text-[gray] cursor-pointer'>
            <input onChange={(e) => setChecked(e.target.checked)} type="checkbox" className='accent-purple-600 cursor-pointer' name="remember" id="remember" />
            Keep me logged in
          </label>
          <a href="#" className='text-purple-600 hover:underline text-[10px]'>Forgot password?</a>
        </div>
        <button disabled={isFormValid || !isPasswordValid}  type="submit" className={`${isFormValid || !isPasswordValid ? 'bg-gray-400' : 'bg-purple-600'} text-white rounded-md p-2 w-full mt-4 cursor-pointer`}>Login</button>
        <p className='text-sm text-gray-500 mt-4'>
          Don't have an account? <a href="#" className='text-purple-600 hover:underline text-[10px]'>Sign up</a>
        </p>
      </form>
    </div>
  )
}

export default SignUpForm
