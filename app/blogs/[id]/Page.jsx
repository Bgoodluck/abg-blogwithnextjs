// import { assets } from '@/assets/assets';
// import Footer from '@/Components/Footer';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import axios from 'axios';

// // Blog page component with server-side data
// function Page({ data }) {
//   return (
//     data ? (
//       <>
//         <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
//           <div className='flex justify-between items-center'>
//             <Link href='/'>
//               <Image
//                 src={assets.abg}
//                 width={100}
//                 height={100}
//                 alt=''
//                 className='w-[100px] h-[100px] rounded-full border border-white sm:w-auto sm:h-auto'
//               />
//             </Link>

//             <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
//               Get started <Image src={assets.arrow} alt='' />
//             </button>
//           </div>
//           <div className='text-center my-24'>
//             <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
//               {data.title}
//             </h1>
//             <Image
//               src={data.authorImg}
//               width={60}
//               height={60}
//               alt=''
//               className='mx-auto mt-6 border border-white rounded-full'
//             />
//             <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>
//               {data.author}
//             </p>
//           </div>
//         </div>
//         <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
//           <Image
//             src={data.image}
//             width={1280}
//             height={720}
//             alt=''
//             className='border-4 border-white'
//           />
//           <div
//             className='blog-content'
//             dangerouslySetInnerHTML={{ __html: data.description }}
//           ></div>

//           <div className='my-24'>
//             <p className='text-black font font-semibold my-4'>
//               Share this article on social media
//             </p>
//             <div className='flex'>
//               <Image src={assets.facebook_icon} width={50} alt='' />
//               <Image src={assets.twitter_icon} width={50} alt='' />
//               <Image src={assets.googleplus_icon} width={50} alt='' />
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     ) : (
//       <></>
//     )
//   );
// }

// export default Page;

// // Fetch paths for blog posts
// export async function getStaticPaths() {
//   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);

//   const paths = response.data.blogs.map((blog) => ({
//     params: {
//       id: mongoId
//   }, // Assuming the blog id is used as the URL slug
//   }));

//   return {
//     paths,
//     fallback: false, // If a blog doesn't exist, show a 404 page
//   };
// }

// // Fetch blog data for each post
// export async function getStaticProps({ params }) {
//   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
//     params: { id: params.id },
//   });

//   return {
//     props: {
//       data: response.data, // Pass the fetched blog data as props
//     },
//   };
// }


import { assets } from '@/assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

// Blog page component with server-side data
function Page({ data }) {
  return (
    data ? (
      <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <Image
                src={assets.abg}
                width={100}
                height={100}
                alt=''
                className='w-[100px] h-[100px] rounded-full border border-white sm:w-auto sm:h-auto'
              />
            </Link>

            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
              Get started <Image src={assets.arrow} alt='' />
            </button>
          </div>
          <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
              {data.title}
            </h1>
            <Image
              src={data.authorImg}
              width={60}
              height={60}
              alt=''
              className='mx-auto mt-6 border border-white rounded-full'
            />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>
              {data.author}
            </p>
          </div>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
          <Image
            src={data.image}
            width={1280}
            height={720}
            alt=''
            className='border-4 border-white'
          />
          <div
            className='blog-content'
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>

          <div className='my-24'>
            <p className='text-black font font-semibold my-4'>
              Share this article on social media
            </p>
            <div className='flex'>
              <Image src={assets.facebook_icon} width={50} alt='' />
              <Image src={assets.twitter_icon} width={50} alt='' />
              <Image src={assets.googleplus_icon} width={50} alt='' />
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <></>
    )
  );
}

export default Page;

// Fetch paths for blog posts
export async function getStaticPaths() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);

  const paths = response.data.blogs.map((blog) => ({
    params: { id: blog._id }, // Using blog._id as the URL slug
  }));

  return {
    paths,
    fallback: "blocking", // Can fetch new paths dynamically
  };
}

// Fetch blog data for each post
export async function getStaticProps({ params }) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${params.id}`);

  return {
    props: {
      data: response.data, // Pass the fetched blog data as props
    },
  };
}
