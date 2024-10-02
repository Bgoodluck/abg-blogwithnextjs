'use client'
import { assets, blog_data } from '@/assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Page({params}) {

    const [data, setData] = useState(null);



    const fetchBlogData = async ()=> {

        const response = await axios.get('/api/blog',{
          params: { id: params.id }
        }) 
         setData(response.data)
    }


    useEffect(()=>{
        fetchBlogData();
    },[])



  return ( data ? <>
    <div className=' bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
       <div className=' flex justify-between items-center'>
        <Link href='/'>
        <Image src={assets.abg} width={100} height={100} alt='' className='  w-[100px] h-[100px] rounded-full border border-white sm:w-auto sm:h-auto'/>
        </Link>
         
         <button className=' flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Get started <Image src={assets.arrow} alt=''/>
         </button>
       </div>
       <div className=' text-center my-24'>
          <h1 className=' text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <Image src={data.authorImg} width={60} height={60} alt='' className=' mx-auto mt-6 border border-white rounded-full'/>
          <p className=' mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
       </div>
    </div>
    <div className=' mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>

         <Image src={data.image} width={1280} height={720} alt='' className=' border-4 border-white '/>
         {/* <h1 className=' my-8 text-[26px] font-semibold'>Introduction:</h1> */}


         <div className=' blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>


         {/* <p>{}</p> */}
         {/* <h3 className=' my-5 text-[18px] font-semibold'> Info 1: ABG sources say this is the newest and most productive software</h3>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <h3 className=' my-5 text-[18px] font-semibold'> Info 2: ABG sources say this is the newest and most productive software</h3>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <h3 className=' my-5 text-[18px] font-semibold'> Info 3: ABG sources say this is the newest and most productive software</h3>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <h3 className=' my-5 text-[18px] font-semibold'> Info 4: ABG sources say this is the newest and most productive software</h3>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <p className=' my-3'>From more sources infomation reaching us, we have discovered that a second and third version is slated for release before the end of the year</p>
         <h3 className=' my-5 text-[18px] font-semibold'>Conclusion</h3>
         <p className=' my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, debitis maiores nemo officia ducimus enim aspernatur ratione nisi reprehenderit excepturi odit suscipit harum tempora inventore delectus eligendi aperiam sunt sequi provident dolores nulla assumenda laborum atque sapiente. Necessitatibus in quos atque iusto animi odit numquam nostrum, voluptate ad tenetur illo.</p> */}

       <div className='my-24'>
            <p className=' text-black font font-semibold my-4'>Share this article on social media</p>
            <div className=' flex'>
                <Image src={assets.facebook_icon} width={50} alt=''/>
                <Image src={assets.twitter_icon} width={50} alt=''/>
                <Image src={assets.googleplus_icon} width={50} alt=''/>
            </div>
      </div>  

    </div>
    <Footer/>
    </>
    : 
    <></>
  )
}

export default Page
