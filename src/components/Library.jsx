import React from 'react'
import Books from './Books'

export default function Library({cards , toggleCard , deleteCard }) {
  return (
    <section className="main">
      {cards.length === 0 && "No Books"}
      {cards.map(card => {
        return (
          <Books {...card} key={card.id} toggleCard={toggleCard} deleteCard={deleteCard} />
        )
      })}
    </section>
  )
}
