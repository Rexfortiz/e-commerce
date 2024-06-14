'use client'

import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category } : CategoryCardProps) => {
  const media = category.media as Media;
  const { setCategoryFilters } = useFilter()

  return (
    <Link href='/products' 
      className={classes.card} 
      style={{backgroundImage: `url(${media.url})`}} 
      onClick={() => setCategoryFilters([category.id])}
    >
      <div className={classes.title}>
        <p>{category.title}</p>    
      </div>
    </Link>
  )
}

export default CategoryCard