import React from 'react'

import classes from './index.module.scss'
import { Blocks } from '../../Blocks'


const TrendingProducts = ({ trendings }) => {

  const { relatedProducts } = trendings

  return (
    <div className={classes.div}>
      <Blocks
        disableTopPadding
        blocks={[
          {
            blockType: 'trendingProducts',
            blockName: 'Trending Product',
            relationTo: 'products',
            
            docs: relatedProducts,
          },
        ]}
      />
    </div>
  )
}

export default TrendingProducts