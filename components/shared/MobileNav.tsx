"use client"
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
import { NavItems } from './NavItems'
  

export const MobileNav = () => {
  const [isOpen,setIsOpen]=useState(false)
  const handleSheetTrigger = () => setIsOpen(!isOpen);
  return (
    <nav className='md:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger className='align-middle'>
    <Image 
    src="/assets/icons/menu.svg"
    alt='menu'
    width={24}
    height={24}
    className='cursor-pointer'
    />
  </SheetTrigger>
  <SheetContent className='flex flex-col gap-6 bg-white'>
    <div className="flex justify-center items-center">
      <Image
    src="/assets/icons/workingg.png"
    alt='logo'
    width={50}
    height={30}/>
     <span className='font-bold text-xl font-serif flex flex-row'>Chol <span className='font-bold text-xl font-serif text-primary-500 italic rotate-3'>Bhai</span></span>
    </div>
    
    <Separator className='border  border-gray-100'/>
    <div onClick={handleSheetTrigger}>
      <NavItems/>
    </div>
    


  </SheetContent>
</Sheet>

    </nav>
  )
}
