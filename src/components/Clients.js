import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Client = ({image,text,link}) => {
  const href=link?link:"#";
  return (
    <Link href={href}>
    <div className='flex transition ease-in-out duration-300 transform hover:scale-90 flex-col items-center justify-center gap-4 px-28 py-20 rounded-lg bg-white border border-gray-400 shadow-md'>
        <div className='rounded-md flex justify-center items-center w-36 h-36 relative'>
        <Image src={image}
        objectFit="cover"
        layout='fill'
        ></Image>
        </div>
        <h5 className='font-merriweather text-md whitespace-nowrap font-bold'>{text}</h5>
    </div>
    </Link>
  )
}

export default Client