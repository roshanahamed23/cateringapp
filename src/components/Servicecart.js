import React from 'react'
import Image from 'next/image'

const Servicecart = ({ icon, title, description, buttonText,link }) => {
  return (
    <div className='border rounded-md shadow-sm text-center p-6 flex flex-col gap-4 justify-center items-center'>
      <div className='rounded-full p-2 bg-red flex justify-center items-center w-24 h-24'>
        <Image 
          src={icon}
          alt="icon-service"
          width={50}  // Add width and height as needed
          height={50} // These are necessary for Next.js Image component
        />
      </div>
      <h5 className="font-merriweather font-semibold text-md">{title}</h5>
      <p className='font-monserrat text-slate-500 max-w-sm'>{description}</p>
      <a href={link}><button className='border border-gray-400 px-5 py-3 rounded-lg text-black font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105'>{buttonText}</button></a>
    </div>
  )
}

export default Servicecart
