import React from 'react'

export default function Button({ children }) {
  return (
    <div className='w-[200px] h-[50px] text-[22px] flex justify-center items-center bg-[#CAFF33] rounded-lg'>
      {children}
    </div>
  )
}