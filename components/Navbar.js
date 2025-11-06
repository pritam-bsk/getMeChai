"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center justify-center space-x-3">
            <div className="shrink-0 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              GM
            </div>
            <span className="font-semibold text-lg">GetMechai</span>
            <span className='pb-2.5'><img width={44} src="./tea.gif" alt="logo" /></span>
          </Link>

          <div className="flex items-center space-x-3">
            {session ? (
              <>
                <span className="text-sm md:text-base">Welcome, {session.user.name}</span>
                <button onClick={()=>signOut()} className="hidden md:inline-flex text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
                  Logout
                </button>
              </>
            ) :
              <Link href={'/login'}>
                <button className="hidden md:inline-flex text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
                  Login
                </button>
              </Link>}
          </div>

        </div>
      </div>
    </nav>

  )
}

export default Navbar
