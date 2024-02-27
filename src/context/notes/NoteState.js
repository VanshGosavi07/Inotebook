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
    }
  ]
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
