import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //get all note
  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNDNkYmI0YzlmMjdkNThmYzRhNGI0In0sImlhdCI6MTcwNzQ0ODI1Nn0.WfRHYDxPkfd1KsDfBni4xdFJCGDfl7eBcD0POpls8-8"

      }
    });
    const json=await response.json()
    console.log(json)
    setNotes(json)
  }
  //Add a note
  const addNote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNDNkYmI0YzlmMjdkNThmYzRhNGI0In0sImlhdCI6MTcwNzQ0ODI1Nn0.WfRHYDxPkfd1KsDfBni4xdFJCGDfl7eBcD0POpls8-8"

      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("adding a new note")
    const note = {
      "_id": "65d4be41ab5c123247c8bb331",
      "user": "65c43dbb4c9f27d58fc4a4b4z",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-02-20T14:59:13.722Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  //Delete a note
  const deleteNote = (id) => {
    //todo api call
    console.log("note deleted", id)
    const newnotes = notes.filter((note) => { return note._id !== id })
    setNotes(newnotes);
  }

  //Edit a note
  const  editNote =async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNDNkYmI0YzlmMjdkNThmYzRhNGI0In0sImlhdCI6MTcwNzQ0ODI1Nn0.WfRHYDxPkfd1KsDfBni4xdFJCGDfl7eBcD0POpls8-8"

      },
      body: JSON.stringify({title,description,tag}),
    });
    const jason = response.json();

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
