import { useState } from 'react'

export default function NewBookForm({onSubmit , modal, setModal}) {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPages, setNewPages] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTitle === "") return

    onSubmit(newTitle, newAuthor, newPages)

    setNewTitle("")
    setNewAuthor("")
    setNewPages("")
  }

  function closeModal() {
    setModal('none')
  }

  return (
    <div id="modal" className={modal}>
      <form onSubmit={handleSubmit} className="modal-container">
        <h2>Add new cards</h2>
        <input 
          value={newTitle} 
          onChange={e => setNewTitle(e.target.value)}
          type="text" 
          placeholder="Title"
          required
          />
        <input 
          value={newAuthor} 
          onChange={e => setNewAuthor(e.target.value)}
          type="text" 
          placeholder="Author" 
          required
          />
        <input 
          value={newPages} 
          onChange={e => setNewPages(e.target.value)}
          type="text" 
          placeholder="Pages" 
          required
          />
        <div className="btn-container">
          <button type="submit" id="add-cards-btn" className="btn create-btn">
            Add
          </button>
          <button onClick={closeModal} type="button" id="close-modal" className="btn cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
