import React from 'react'
import cl from './Card.module.scss'

interface TODO {
    card : any
}

export default function Card({card} : TODO) {
    console.log(card)
  return (
    <div className={cl.card}>
        <div className={cl.cardTitle}>{card.title}</div>
        <div className={cl.cardBody}>{card.body}</div>
        <div className={cl.underCards}>{card.underCards}</div>
    </div>
  )
}
