import Link from 'next/link'
import React from 'react'
import classes from './index.module.scss'
import { Media } from '../../Media'

const TrendingCard = ({ trendings }) => {
  const { relatedProducts } = trendings

  const { description, image: metaImage } = relatedProducts.meta || {}

  const href = `/products/${relatedProducts.slug}`

  return (
    <Link href={href} className={classes.card}>
      <div className={classes.mediaWrapper}>
        {trendings.metaImage && typeof trendings.metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={relatedProducts.metaImage} fill />
        )}
      </div>
      <div className={classes.content}>       
        <h4 className={classes.title}>{relatedProducts.title}</h4>
        <div className={classes.body}>
          <p className={classes.description}>{relatedProducts.title}</p>
        </div>
      </div>
    </Link>
  )
}

export default TrendingCard