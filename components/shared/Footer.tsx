import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Separator } from '../ui/separator';

const Footer = () => {
    return (
        <footer className='border-t'> 
            
          <div className='flex flex-col wrapper justify-between items-center sm:flex-row gap-4 p-4'>
          <Link href={"/"} className='w-36 flex flex-row items-center'>
      <Image
    src="/assets/icons/workingg.png"
    alt='logo'
    width={50}
    height={50}/>
    <span className='font-bold text-3xl font-serif flex flex-row'>Chol <span className='font-bold text-3xl font-serif text-primary-500 italic rotate-3'>Bhai</span></span>
      </Link>
            <p>2024 @Cholbhai. ALL Rights Reserved</p>
          </div>
        </footer>
    );
};

export default Footer;