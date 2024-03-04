import React from 'react'
import { Logo } from '../assets'
import { UserAuthInput } from '../components'

const SignUp = () => {
  return (
    <div className='w-full py-6 '>
<img src={Logo} alt="logo" className='object-contain  w-32 h-auto opacity-50' />
<div className='w-full flex flex-col items-center justify-center py-8'>
    <p className='py-12 text-2xl text-primaryText'>Join with Us! 🤩</p>

     <div className=' px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8'>
     {/* email */}
     <UserAuthInput />

     {/*  password */}
     <UserAuthInput />
     {/*alert section  */}

     {/* login button */}

     {/* acount  text section */}

     {/* or section  */}

     {/* sign in with google */}

     {/* or section  */}

     {/*  sign in with  github */}

     
     </div>
</div>
    </div>
  )
}

export default SignUp