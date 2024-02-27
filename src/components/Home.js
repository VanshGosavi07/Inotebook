import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
const Home = () => {
  const context = useContext(noteContext)
  const { notes, setNotes } = context;
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Notes</h2>
        <form className="my-2">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
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
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
        <h2>You Notes</h2>
        {notes.map((note) => {
          return note.title + " , "
        })}
      </div>
    </div>
  )
}

export default Home
