import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AuthProvider } from '.'

const Navbar = () => {
  const session = {}

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href={'/'} >
          <Image
            src={'/logo.svg'}
            width={120} height={0}
            alt='KhiemFlex' />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexBetween gap-4'>
        {session ? (
          <>
            User Photo
            <Link href={"/create-project"}>
              Share Work
            </Link>
          </>
        ) : (<AuthProvider />
        )}
      </div>
    </nav>
  )
}

export default Navbar