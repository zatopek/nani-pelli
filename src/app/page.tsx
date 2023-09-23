'use client'

import Link from 'next/link'
import { useState } from 'react'


export default function Home() {
  let name = ''
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  
  return (
    <main className="container mx-auto sm:px-6 lg:px-8 lg:py-8">
      <div className="bg-white bg-opacity-30 px-6 py-36 mx-auto h-full w-fit">
        <div className="px-6 py-24 sm:px-2 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-full lg:col-span-full">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Anvesh & Varsha's Reception.
                  <br />
                </h2>
              </div>
              <div className="sm:col-span-full lg:col-span-full">
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  We are so excited to see you!
                  <br />
                  Please enter your last name to find your table.
                </p>
              </div>
              <div className="sm:col-span-full lg:col-span-full">
                <div className="mt-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6 w-full">
                  <Link href={{
                    pathname: '/seating',
                    query: { name: inputValue },
                  }} className="rounded-md w-full bg-yellow-800 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                      Find my table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
