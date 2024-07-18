import React from 'react'
import { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Form = ({
  // isSignInPage = false
}) => {
  const [isSignInPage, setIsSignInPage] = useState(true)
  return (
    <div className='bg-[#D2CFDF] w-full h-screen flex justify-center items-center'>
        <div className='w-[700px] h-[550px] bg-white flex justify-center items-center'>
            <div className={`w-full h-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'}`}>
                <div>Welcome to.....,</div>
                <div className='uppercase text-2xl mb-[50px]'>instaclone</div>
                <form>
                  {
                    !isSignInPage &&
                    <Input label="Username" type="text" placeholder="Enter your username"/>
                  }
                  <Input label="Email" type="email" placeholder="Enter your email"/>
                  <Input label="Password" type="password" placeholder="Enter your password"/>
                  <Button label={isSignInPage ? "Sign in" : "Sign up"} />
                </form>
                <div className="cursor-pointer mt-[20px]" onClick={() => setIsSignInPage(!isSignInPage)}> {isSignInPage ? "Create a new account" : "Sign in"} </div>
            </div>
            <div className={`w-full h-full bg-gray-400 ${!isSignInPage && 'order-1'}`}></div>
        </div>
    </div>
  )
}

export default Form