'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './index.module.scss'
import MobileNav from '../MobileNav'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'



const HeaderComponent = ({ header} : { header: Header }) => {

  const pathname = usePathname();

  return (
    <>
      <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
        <Gutter className={classes.wrap}>
          <Link href='/'>
            <div className={classes.large}>
              <Image src='/bumi-header-normal.png' alt='logo' width={230} height={90}/>
            </div>
            <div className={classes.small}>
              <Image src='/logobumi.png' alt='logo' width={120} height={90} />
            </div>
          </Link>

          <div className={classes.large}>
            <HeaderNav header={header}/>
          </div>
          <div className={classes.small}>
            <MobileNav header={header} />
          </div>
        </Gutter>        
      </nav>
    </>
  )
}

export default HeaderComponent