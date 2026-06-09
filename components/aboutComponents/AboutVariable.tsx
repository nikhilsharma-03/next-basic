"use client"
import React, { useEffect, useState } from 'react'
import ImageComponent from './ImageComponent'

const AboutVariable = () => {
  const[count, setCount] = useState<number>(0)
  useEffect(() => {
    console.log("count is updated", count)
  }, [count])
  return (
    <div>
    <div>
      current count= {count}
    </div>
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " 
      onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
    <ImageComponent countData={count} />
    </div>
  )
}

export default AboutVariable