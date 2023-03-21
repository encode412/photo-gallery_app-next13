"use client";
import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'></h1>
        <form className='max-w-[600px] m-auto' action="#">
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 '  type="text" placeholder='Name' />
                <input className='border shadow-lg p-3 '  type="email" placeholder='Email' />
            </div>
            <input type="text" placeholder='Subject' className='border shadow-lg p-3 w-full my-2' />
            <textarea placeholder='Message' className='border shadow-lg p-3 w-full' name="" id="" cols="30" rows="10" />
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact