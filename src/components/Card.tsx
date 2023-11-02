import React from 'react'
import cl from './Card.module.scss'
import { Cards } from './types/Cards'
// import SubCards from './SubCards'

export default function Card({tasks} : any) {
  console.log(tasks.underCards)
  return (
    <div className={cl.card}>
        <div className={cl.card_title}>{tasks.title}</div>
        <div className={cl.card_body}>{tasks.body}</div>
        {/* <div className={cl.under_cards}>
          <SubCards underCards={tasks.underCards} />  
        </div> */}
    </div>
  )
}
