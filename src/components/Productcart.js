import React from "react";
import Image from "next/image";
import Link from "next/link";


const Productcart = ({ image, title, description, buttonText,link }) => {
  return (
    <div className="border rounded-md shadow-sm text-center p-6 flex flex-col gap-4 justify-center items-center">
      <div className="rounded-md flex justify-center items-center w-24 h-24 relative">
        <Image
          src={image}
          alt="productimage"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h5 className="font-merriweather font-semibold text-md">{title}</h5>
      <p className="font-montserrat text-slate-300 max-w-sm">
        {description}
      </p>{" "}
      <Link href={link}>
      <button className="border border-slate-500 px-5 py-3 rounded-lg text-white font-montserrat transition duration-300 ease-in-out transform cursor-pointer hover:scale-105">
        {buttonText}
      </button></Link>
    </div>
  );
};

export default Productcart;
