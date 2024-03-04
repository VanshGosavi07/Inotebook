import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
const Notes = () => {
  const context = useContext(noteContext)
  const { notes, addNote } = context;
  return (
    <>
    <Addnote/>
    <div>
      <div className='my-3 row'>
        <h2>You Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note.id} note={note} />
        })}
      </div>
    </div>
    </>
  )
}

export default Notes
