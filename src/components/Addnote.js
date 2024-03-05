import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext';
const Addnote = () => {
  const context = useContext(noteContext)
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" })
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h2>Add a Notes</h2>
      <form className="my-2">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' onChange={onChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" name='description' id="description" onChange={onChange} />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
        </div>
      </form>
    </div>
  )
}

export default Addnote
