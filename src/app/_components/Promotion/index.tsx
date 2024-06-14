'use client'

import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import TrendingProducts from './TrendingProducts'
import { Trending } from '../../../payload/payload-types'
import TrendingCard from './TrendingCard'

const Promotion = ({ trendings }) => {

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days,hours,minutes,seconds })

      if(timeDifference === 0){
        clearInterval(timerInterval)
      }

    }, 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <div className={classes.titleWrapper}>
          <h5>Deals of the Month</h5>
        </div>
        <div className={classes.container}>
          <p>
            Elevate your space with style! 🛋️✨ Explore our exclusive furniture 
            collection and enjoy limited-time promotions. Redefine your home, 
            redefine comfort. Shop now!
          </p>

          <ul className={classes.stats}>
            <StatBox label="Days" value={time.days} />
            <StatBox label="Hours" value={time.hours} />
            <StatBox label="Minutes" value={time.minutes} />
            <StatBox label="Seconds" value={time.seconds} />
          </ul>
        </div>
        
      </div>
      <div  className={classes.textBox}>
        <div className={classes.titleWrapper}>
          <h5>Trending Products</h5>
        </div>
        <TrendingProducts trendings={trendings} />
        <TrendingCard trendings={trendings} />
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label:string, value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion