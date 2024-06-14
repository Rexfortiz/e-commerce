'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import Image from 'next/image'

import classes from './index.module.scss'
import { Button } from '../../Button'

const MobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {

  const navItems = header?.navItems || []
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {

  ...(isOpen && { transform: `translateX(${isOpen ? '0': '100%' })` }),

  };

  return (
    <>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <Image src='/assets/icons/hamburger.png' alt='nav menu' width={40} height={10}/>
      </Button>
      <nav className={classes.navContainer} style={navStyle}>
        <div  className={classes.topNav} key={1}>
          <Image src='/logobumi.png' alt='logo' width={80} height={90} />
          <Button onClick={() => setIsOpen((prev) => !prev)} className={classes.quit}>
            <Image src='/assets/icons/x.png' alt='nav menu' width={30} height={10}/>
          </Button>
        </div>
        {user && <Link href="/account">Account</Link>}
        {!user && <Button 
          el='link'
          href='/login'
          label='Login'
          appearance='primary'
          onClick={() => (window.location.href = '/login')}
          />}
        {user && <CartLink />}
        {navItems.map(({ link }, i) => {
          return <div key={i}>
                  <CMSLink key={i} {...link} appearance="none" />   
                </div>
          })}
      </nav>
    
    </>
  )
}

export default MobileNav