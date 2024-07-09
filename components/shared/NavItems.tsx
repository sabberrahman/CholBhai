"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavItems = () => {
  const path=usePathname()
  return (
    
      <ul className='flex flex-col gap-4 items-start md:flex-between md:flex-row'>
        {headerLinks.map((link)=>{ 
          const iaActive = path === link.route
          return (
           <li className={`${iaActive && 'text-primary-500'} flex-center whitespace-nowrap p-medium-16`} key={link.route}>
           <Link href={link.route} >{link.label}</Link>  
          </li>
         )
    }
      )}
      </ul>

      
    
  )
}
