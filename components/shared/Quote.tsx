import { Rocket } from 'lucide-react'
import { Gruppo } from 'next/font/google'
import React from 'react'

function Quote() {
  return (

    <>
    <div className="hidden md:flex max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
     
      <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
        <div className="p-4 md:p-5">
          <div className="flex gap-x-5">
            <svg className="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  
            <div className="grow">
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Ask our community
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                Get help from 40k+ Cholbhai users
              </p>
            </div>
          </div>
        </div>
      </a>
      
  
     
      <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
        <div className="p-4 md:p-5">
          <div className="flex gap-x-5">
            <svg className="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
  
            <div className="grow">
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Join us in discord 
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                 with our growing community
              </p>
            </div>
          </div>
        </div>
      </a>
      
  
      
      <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
        <div className="p-4 md:p-5">
          <div className="flex gap-x-5">
            <svg className="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
  
            <div className="grow">
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Email us
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                Reach us at <span className="text-blue-600 decoration-2 group-hover:underline font-medium dark:text-blue-500">cholbhai@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </a>
    
    </div>
    
  </div>

  <div className="md:hidden lg:hidden flex items-center justify-center flex-col backdrop-blur-lg bg-dotted-pattern">
    <h1 className='text-3xl  font-bold text-center'>Trusted By</h1>
    <h1 className="text-2xl  font-bold text-center text-blue-600 flex ">+30k Growing Community </h1>
  </div>
    
    </>
    
  )
}

export default Quote