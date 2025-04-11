'use client'

import { SearchIcon, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Tops', href: '/tops' },
  { name: 'Dresses', href: '/dresses' },
  { name: 'Co-Ordrs', href: '#' },
]

const Navbar = () => {
  
  const pathname = usePathname();

  return (
    <nav className='bg-background sticky top-0 z-50 text-black'>
      <div className='container-x-padding flex items-center justify-between p-4'>
        <SearchIcon />
        <Image
          src={'/cdn-imgs/swadhesi-logo.svg'}
          alt={'Logo'}
          width={100}
          height={60}
          className="w-fit h-10"
        />
        <div className='flex items-center space-x-4'>
          <ShoppingBagIcon/>
          <Avatar className='hidden sm:block'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator decorative/>
      <div className='hidden sm:flex items-center justify-center gap-4 p-4 '>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`
              relative 
              font-semibold 
              transition-all 
              duration-150 
              hover:text-primary 
              hover:font-bold 
              focus:text-primary 
              focus:font-bold 
              [&.active]:text-primary
              [&.active]:font-bold
              [&.active]:after:content-['']
              [&.active]:after:absolute
              [&.active]:after:bottom-[-16px]
              [&.active]:after:left-0
              [&.active]:after:w-full
              [&.active]:after:h-[2px]
              [&.active]:after:bg-primary
              [&.active]:scale-105
              [&.active]:drop-shadow-sm
              after:content-['']
              after:absolute
              after:bottom-[-16px]
              after:left-0
              after:w-0
              after:h-[2px]
              after:bg-primary
              after:transition-all
              after:duration-150
              hover:after:w-full
              ${pathname === link.href ? 'active' : ''}
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Separator decorative/>
    </nav>
  )
}

export default Navbar