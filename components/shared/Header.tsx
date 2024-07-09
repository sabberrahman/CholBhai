import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { MobileNav } from './MobileNav'
import { NavItems } from './NavItems'

export const Header = () => {
  return (
   <header className='w-full border-b'>
    <div className='wrapper flex items-center justify-between'>
      <Link href={"/"} className='w-36 flex flex-row items-center'>
      <Image
    src="/assets/icons/workingg.png"
    alt='logo'
    width={50}
    height={50}/>
    <span className='font-bold text-3xl font-serif flex flex-row'>Chol <span className='font-bold text-3xl font-serif text-primary-500 italic rotate-3'>Bhai</span></span>
      </Link>
   


      <SignedIn>
        <nav className='hidden md:flex-between w-full max-w-xs'>
          <NavItems/>
        </nav>
      </SignedIn>

    <div className='flex w-32 justify-end gap-3'>
      {/* when user is logOut show this */}
      <SignedOut> 
        <Button asChild className='rounded-full' size="lg">
         <Link href={"/sign-in"}>Login</Link>
        </Button>
      </SignedOut>
     {/*when user signed in  */}
    
      <SignedIn>
        <UserButton afterSignOutUrl='/'/>
        <MobileNav/>
      </SignedIn>

    </div>

   </div>  
   </header>
  )
}
