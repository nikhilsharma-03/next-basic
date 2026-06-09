"use client"
import Image from 'next/image';
import React from 'react'
interface ICountProps {
    countData: number;
}
const ImageComponent: React.FC<ICountProps> = ({ countData }) => {
  return ( <>
    <div className=''>
        <div> 
            <Image className="w-80! h-auto!" width={50} height={50} unoptimized src="/assets/Earth.jpg" alt="image" />
        </div>
        <div>
            count value
            {countData}
        </div>
    </div>
    </>
  )
}

export default ImageComponent