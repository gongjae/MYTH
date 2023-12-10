'use client'

import { Typewriter } from 'react-simple-typewriter'
import './TopText.module.css'

export default function TopText() {
  return (
    <>
      <div className="topTitleContainer">
        <div className="topTitle">
          <Typewriter words={[`Geunsoo Kim Page`]} typeSpeed={50} />
        </div>
      </div>
    </>
  )
}
