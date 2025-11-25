import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

function Navigation() {
  return (
   <nav >
    <Logo />
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cabins">Cabins</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/account">Your account</Link></li>
       
    </ul>
   </nav>
  )
}

export default Navigation
