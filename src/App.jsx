import React, { useEffect , useState } from "react"
import './style.css'
import Library from './components/Library';
import NewBookForm from './components/NewBookForm';



export default function App() {
  const [modal, setModal] = useState('none')

  const [cards, setCards] = useState(() => {
    const localValue = localStorage.getItem("CARDS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect( () => {
    localStorage.setItem("CARDS", JSON.stringify(cards))
  }, [cards])

  function addCard(title, author, pages) {
    setCards(currentcards => {
      return [
        ...currentcards,
        { id: crypto.randomUUID(), title, author, pages, read: 
        false},
      ]
    })
  }

  function toggleCard(id, read) {
    setCards(currentCards => {
      return currentCards.map(card => {
        if (card.id === id) {
          return { ...card, read }
        }

        return card
      })
    })
  }

  function deleteCard(id) {
    setCards(currentCards => {
      return currentCards.filter(card => card.id !== id)
    })
  }

  function openModal() {
    setModal('modal')
  }

  


  return (
    <>
      <section className="header">
        <h1>Library Web App</h1>
        <p>A simple library webapp built with HTML, CSS, JavaScript, and React</p>
      </section>

      <hr />

      <Library cards={cards} toggleCard={toggleCard} deleteCard={deleteCard} />

      <NewBookForm onSubmit={addCard} setModal={setModal} modal={modal} />

      <div className="add-btn-container">
        <button 
          id="open-modal" 
          className="add-btn" 
          type="button"
          onClick={openModal}
          >+</button>
      </div>
    </>
  )
}
