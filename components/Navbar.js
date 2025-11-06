"use client"
import React from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
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

          <div className="relative flex items-center space-x-3">
            {session ? (
              <>
                <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
                  setTimeout(() => {
                    setShowdropdown(false)
                  }, 100);
                }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex justify-center items-center rounded-full w-10 h-10 text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  P
                  <span className="sr-only">Open user menu</span>
                </button>

                <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-[15px] top-12 bg-slate-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                  <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <Link href="/dashboard" className="block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                      <Link href={`/${session.user.username}`} className="block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                    </li>
                    <li>
                      <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                    </li>
                  </ul>
                </div>
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
