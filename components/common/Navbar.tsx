import { SearchIcon, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Tops', href: '/tops' },
  { name: 'Dresses', href: '/dresses' },
  { name: 'Co-Ordrs', href: '#' },
]

const textStyle = ''
const iconColor = 'stroke-black'

const Navbar = () => {
  return (
    <nav className='bg-background sticky top-0 z-50'>
      <div className='container-x-padding flex items-center justify-between p-4'>
        <SearchIcon className={`${iconColor}` } />
        <Image
          src={'/cdn-imgs/swadhesi-logo.svg'}
          alt={'Logo'}
          width={100}
          height={60}
          className="w-fit h-10"
        />
        <div className='flex items-center space-x-4'>
          <ShoppingBagIcon className={`${iconColor}` } />
          <Avatar className='hidden sm:block'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator/>
      <div className='hidden sm:flex items-center justify-center gap-4 p-4 '>
        {navLinks.map((link) => (
          <Link
          key={link.name}
          href={link.href}
          className={`hover:text-[#bc6c25] hover:font-bold font-semibold transition-colors duration-50 ${textStyle}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Separator />
    </nav>
  )
}

export default Navbar