'use client';

import React from 'react'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs';

function Navbar() {
  return (
    <> 
      <DesktopNavbar />
    </>
  )
}

const items = [
  {label: "Dashboard", link: '/'},
  {label: "Transaction", link: '/transaction'},
  {label: "manage", link: '/manage'},
]

function DesktopNavbar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block bg-gray-900">
      <nav className="container flex items-center justify-between px-8 ">
        <div className="flex h-[80px] min-h-[50px] items-center gap-x-5">
          <Logo />
          <div className="flex h-full">
           { items.map(item => 
            <NavbarItem  
              key={item.label}
              link={item.link}
              label={item.label}
            />
           )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  )
}

function NavbarItem({link, label}: {link : string, label: string}){
  const pathname = usePathname();
  const isActive = pathname===link;

  return (
    <div className="relative flex items-center ">
      <Link 
        href={link} 
        className={cn(
          buttonVariants({variant:"ghost"})
          ,"w-full justify-start text-lg text-muted-foreground hover:text-foreground ", isActive && "text-foreground"
      )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block bg-cyan-800" />
      )}
    </div>
  )
}

export default Navbar