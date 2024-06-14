'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { useCart } from '../../_providers/Cart'

import classes from './index.module.scss'
import Image from 'next/image'

export const CartLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props
  const { cart } = useCart()
  const [length, setLength] = useState<number>()

  useEffect(() => {
    setLength(cart?.items?.length || 0)
  }, [cart])

  return (
    <Link className={[classes.cartLink, className].filter(Boolean).join(' ')} href="/cart">
      <Fragment>
        <div className={classes.cart}>
          <Image src='/assets/icons/cart.svg' alt='cart' width={30} height={30} />
          <div className={classes.number}>
            {typeof length === 'number' && length > 0 && (
              <small className={classes.quantity}>{length}</small>
            )}
          </div>
        </div>
      </Fragment>
    </Link>
  )
}
