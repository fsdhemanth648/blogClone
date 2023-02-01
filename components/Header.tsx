import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="">
                <img 
                    className="w-44 object-contain cursor-pointer" 
                    src="https://links.papareact.com/yvf"
                    alt=''
                />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h1>About</h1>
                <h1>Contact</h1>
                <h1 className="text-white bg-green-500 px-4 py-1 rounded-full">Follow</h1>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600 ">
            <h3>Sign in</h3>
            <h3 className="border border-green-500 px-4 py-1 rounded-full">Get Started</h3>
        </div>
    </header>
  )
}

export default Header
