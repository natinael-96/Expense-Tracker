import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

function layout({children} : {children :ReactNode}) {
  return (
    <div className='relative h-screen flex w-full flex-col'>
        <Navbar />
        <div className='w-full'>{children}</div>
    </div>
    
  )
}

export default layout