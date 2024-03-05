import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "65d2f72afe851bb3cec80d59",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 1",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:37:30.217Z",
      "__v": 0
    },
    {
      "_id": "65d2f812fcd66df7cc4f1534",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 2",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:41:22.288Z",
      "__v": 0
    },
    {
      "_id": "65d4bd2f5fbcb78d70125bf3",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 3",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:54:39.084Z",
      "__v": 0
    },
    {
      "_id": "65d4be41ab5c123247c8bb33",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title hain na",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:59:13.722Z",
      "__v": 0
    },
    {
      "_id": "65d2f72afe851bb3cec80d519",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 1",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:37:30.217Z",
      "__v": 0
    },
    {
      "_id": "65d2f812fcd66df7cc4f1534",
      "user": "65c43dbb4c9f27d58fc42a4b4",
      "title": "my title 2",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:41:22.288Z",
      "__v": 0
    },
    {
      "_id": "65d4bd2f5fbcb178d70125bf3",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 3",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:54:39.084Z",
      "__v": 0
    },
    {
      "_id": "65d4be41ab57c123247c8bb33",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title hain na",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:59:13.722Z",
      "__v": 0
    },
    {
      "_id": "65d2f72af9e851bb3cec80d59",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 1",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:37:30.217Z",
      "__v": 0
    },
    {
      "_id": "65d2f81562fcd66df7cc4f1534",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 2",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:41:22.288Z",
      "__v": 0
    },
    {
      "_id": "65d445bd2f5fbcb78d70125bf3",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 3",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:54:39.084Z",
      "__v": 0
    },
    {
      "_id": "65d4be41ab5c12324567c8bb33",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title hain na",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:59:13.722Z",
      "__v": 0
    },
    {
      "_id": "65d2f72afe85891bb3cec80d59",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 1",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:37:30.217Z",
      "__v": 0
    },
    {
      "_id": "65d2f81299fcd66df7cc4f1534",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 2",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-19T06:41:22.288Z",
      "__v": 0
    },
    {
      "_id": "65d4bd2f589fbcb78d70125bf3",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title 3",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:54:39.084Z",
      "__v": 0
    },
    {
      "_id": "65d4be7641ab5c123247c8bb33",
      "user": "65c43dbb4c9f27d58fc4a4b4",
      "title": "my title hain na",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2024-02-20T14:59:13.722Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
    //todo api call
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
    const newnotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newnotes);
  }

  //Edit a note
  const editNote = () => {

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
