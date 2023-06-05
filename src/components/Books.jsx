import React from 'react'

export default function Books({ read, id, title, author, pages , toggleCard, deleteCard}) {
  return (
    <article className="book">
      <div>
        <h2>{title}</h2>
        <p className="author">Author: {author}</p>
        <p className="pages">Pages: {pages}</p>
      </div>
      <div className='btn-container-2'>
        <button onClick={ () => deleteCard(id)} type="button" className="btn cancel-btn">
          Delete
        </button>
        <input type="checkbox" checked={read}
        onChange={e => toggleCard(id, e.target.checked)}/>
      </div>
    </article> 
  )
}
