import React from 'react'
import Link from'next/link'

export const Settings = () => {
  return (
    <div className='text-black-500 text-lg flex-col font-bold'>
        <Link href="/">Admin Panel</Link>
      <h1 className='text-4xl pt-4 text-blue-500 font-bold'>This is our Settings Page</h1>
    </div>
  )
}

export default Settings;