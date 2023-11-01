import React from 'react'
import cl from './SubCards.module.scss'

export default function SubCards(underCards : any) {
  return (
    <div className={cl.under_cards}>
        {underCards.length !== 0 ? underCards.map((subtasks : any) =>
            <li className={cl.subtasks}>{subtasks.body}</li>
        ) : <div className={cl.subtasks_absent}>Subtasks are absent</div>}
    </div>
  )
}
