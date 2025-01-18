"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'

const Nav = () => {
  return (
    <nav className = "w-full flex-between mb-16 pt-3">
        <Link href = "/" className = "flex gap-2 flex-center">
        <Image src = "/assets/images/logo.svg" 
        width = {30}
        height = {30}
        alt = "sample-app"
        className ="object-contain"/>
        </Link>
    </nav>
  )
}

export default Nav
