import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className=' flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
       <Image src={assets.abg} alt='' width={120} className=' w-16 h-16 rounded-full'/>
        <p className=' text-sm text-white'>ALL right reserved. Copyright @ABG-blogs 2024</p>
        <div className=' flex'>
            <Image src={assets.facebook_icon} alt='' width={40}/>
            <Image src={assets.twitter_icon} alt='' width={40}/>
            <Image src={assets.googleplus_icon} alt='' width={40}/>
        </div>
    </div>
  )
}

export default Footer
