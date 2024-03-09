import React, { useContext, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useEffect } from 'react';
const Notes = () => {
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refclose = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }
  const string = "____________"

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const handleClick = (e) => {
    console.log("updating notes", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refclose.current.click();
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Addnote />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{string}Edit Note{string}</h1>
              <button type="button" className="btn-close  ml-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-2">
                <div className="col-md-6">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' onChange={onChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" name='edescription' value={note.edescription} id="edescription" onChange={onChange} />
                </div>
                <div className="col-md-6 ">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" name='etag' value={note.etag} id="etag" onChange={onChange} />
                </div>
                <div className="col-12">
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleClick} className="btn btn-primary">Update Notes</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='my-3 row'>
          <h2>You Notes</h2>
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} updateNote={updateNote} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes
